import { Fragment, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Progress from './components/Progress'
import Score from './components/Score'
import Question from './components/Question'
import Leaderboard from './components/Leaderboard'
import SaveScore from './components/SaveScore'

const LS_SCORES_KEY = 'reactQuizLeaderboard'

const decodeString = string => {
	const text = document.createElement('textarea')
	text.innerHTML = string
	return text.value
}

const calculatePercentage = (fraction, total) => {
	if (fraction === 0 || total === 0) return 0
	return Math.floor((fraction * 100) / total)
}

function App() {
	const [loadingCategories, setLoadingCategories] = useState(false)
	const [loadingQuestions, setLoadingQuestions] = useState(false)
	const [categories, setCategories] = useState([])
	const [apiOptions, setApiOptions] = useState({ amount: '5' })
	const [questionsBank, setQuestionsBank] = useState([])
	const [currentQuestion, setCurrentQuestion] = useState(null)
	const [questionNum, setQuestionNum] = useState(0)
	const [totalQuestions, setTotalQuestions] = useState(0)
	const [answers, setAnswers] = useState([])
	const [score, setScore] = useState(0)
	const [quizInProgress, setQuizInProgress] = useState(false)
	const [gameEnded, setGameEnded] = useState(false)

	const resetGame = () => {
		setQuestionsBank([])
		setCurrentQuestion(null)
		setQuestionNum(0)
		setTotalQuestions(0)
		setAnswers([])
		setScore(0)
		setQuizInProgress(false)
		setGameEnded(false)
	}

	const handleChange = e => {
		setApiOptions(prevOptions => ({
			...prevOptions,
			[e.target.id]: e.target.value,
		}))
	}

	const handleSubmit = async e => {
		e.preventDefault()

		resetGame()

		setLoadingQuestions(true)
		try {
			const { data } = await axios({
				method: 'GET',
				url: 'https://opentdb.com/api.php',
				params: { ...apiOptions },
			})

			setQuestionsBank(
				data.results.map((questionItem, index) => {
					const answer = decodeString(questionItem.correct_answer)
					const wrongAnswers = [
						...questionItem.incorrect_answers.map(a => decodeString(a)),
						answer,
					]
					return {
						id: `${index}-${Date.now()}`,
						question: decodeString(questionItem.question),
						answer: answer,
						options: wrongAnswers.sort(() => Math.random() - 0.5),
					}
				})
			)
			setTotalQuestions(data.results.length)
			setQuizInProgress(true)
		} catch (error) {
			console.log(error)
		}
		setLoadingQuestions(false)
	}

	const handleAnswers = data => {
		setAnswers(prevData => [...prevData, data])
		setScore('?')
	}

	const setNewScoreAndQuestionNum = useRef()

	setNewScoreAndQuestionNum.current = () => {
		let newScore = 0
		for (const answer of answers) {
			if (answer.isCorrectAnswer) newScore += 100
		}
		setScore(newScore)

		if (questionNum < totalQuestions) {
			setCurrentQuestion(questionsBank[questionNum])
			setQuestionNum(questionNum + 1)
		} else {
			setQuizInProgress(false)
		}

		if (questionNum === totalQuestions) setGameEnded(true)
	}

	useEffect(() => {
		setLoadingCategories(true)
		let cancel

		axios({
			method: 'GET',
			url: 'https://opentdb.com/api_category.php',
			cancelToken: new axios.CancelToken(c => (cancel = c)),
		})
			.then(({ data }) => {
				setCategories(data.trivia_categories)
				setLoadingCategories(false)
			})
			.catch(error => {
				if (axios.isCancel(error)) return
				console.log(error)
				setLoadingCategories(false)
			})

		return () => cancel()
	}, [])

	useEffect(() => {
		setCurrentQuestion(questionsBank[0])
		setQuestionNum(1)
	}, [questionsBank])

	useEffect(() => {
		if (!answers.length) return
		const timeout = setTimeout(() => {
			setNewScoreAndQuestionNum.current()
		}, 3000)
		return () => clearTimeout(timeout)
	}, [answers])

	return (
		<Fragment>
			<Header
				categories={categories}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				loadingCategories={loadingCategories}
				loadingQuestions={loadingQuestions}
				quizInProgress={quizInProgress}
				defaultNumOfQuestions={apiOptions.amount}
			/>

			<div className='container'>
				{!quizInProgress && !totalQuestions && (
					<Leaderboard lsKey={LS_SCORES_KEY} />
				)}

				{currentQuestion && (
					<Fragment>
						<div className='flex-between'>
							<Progress
								questionNum={questionNum}
								totalQuestions={totalQuestions}
								percentage={calculatePercentage(questionNum, totalQuestions)}
							/>
							<Score score={score} />
						</div>

						<Question
							question={currentQuestion}
							handleAnswers={handleAnswers}
							lastQuestion={questionNum === totalQuestions}
							gameEnded={gameEnded}
						/>
					</Fragment>
				)}

				{gameEnded && (
					<SaveScore
						score={score}
						lsKey={LS_SCORES_KEY}
						resetGame={resetGame}
					/>
				)}
			</div>
		</Fragment>
	)
}

export default App

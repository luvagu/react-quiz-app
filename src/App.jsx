import { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Progress from './components/Progress'
import Score from './components/Score'
import Question from './components/Question'

const decodeString = string => {
	const text = document.createElement('textarea')
	text.innerHTML = string
	return text.value
}

const calculatePercentage = (fraction, total) =>
	Math.floor((fraction * 100) / total)

/**
 *
 * @todo
 * fix flip answer background bug
 * add choose answer
 * add scores for correct and incorrect answers
 */

function App() {
	const [loadingCategories, setLoadingCategories] = useState(false)
	const [loadingQuestions, setLoadingQuestions] = useState(false)
	const [categories, setCategories] = useState([])
	const [questions, setQuestions] = useState([])
	const [options, setOptions] = useState({ amount: '10' })

	console.log(questions);

	const handleChange = e => {
		setOptions(prevOptions => ({
			...prevOptions,
			[e.target.id]: e.target.value,
		}))
	}

	const handleSubmit = async e => {
		e.preventDefault()

		setLoadingQuestions(true)
		try {
			const { data } = await axios({
				method: 'GET',
				url: 'https://opentdb.com/api.php',
				params: options,
			})

			setQuestions(
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
		} catch (error) {
			console.log(error)
		}
		setLoadingQuestions(false)
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

	return (
		<Fragment>
			<Header
				categories={categories}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				loadingCategories={loadingCategories}
				loadingQuestions={loadingQuestions}
			/>
			<div className='container'>
				<div className='flex-between'>
					<Progress
						questionNum={5}
						totalQuestions={50}
						percentage={calculatePercentage(3, 10)}
					/>
					<Score />
				</div>
				
				<Question />
			</div>
		</Fragment>
	)
}

export default App

import { useEffect, useRef, useState } from 'react'

function Question({
	question,
	handleAnswers,
	setTimer,
	withTimer,
	lastQuestion,
	gameEnded,
}) {
	const [isAnswered, setIsAnswered] = useState(false)
	const [chosenAnwser, setChosenAnwser] = useState('')

	const handleChosenAnser = option => {
		setChosenAnwser(option)
		setIsAnswered(true)
		handleAnswers({
			id: question.id,
			isCorrectAnswer: question.answer === option,
		})
	}

	const handleTimeout = useRef()

	handleTimeout.current = () => {
		setChosenAnwser(question.answer)
		setIsAnswered(true)
		handleAnswers(null)
	}

	useEffect(() => {
		setChosenAnwser('')
		setIsAnswered(false)
	}, [question])

	useEffect(() => {
		if (!withTimer) return

		let seconds = withTimer

		const countDown = setInterval(() => {
			setTimer(seconds)
			seconds--

			if (isAnswered) {
				setTimer(0)
				return clearInterval(countDown)
			}

			if (seconds < 0 && !isAnswered) {
				setTimer(0)
				handleTimeout.current()
				return clearInterval(countDown)
			}
		}, 1000)

		return () => clearInterval(countDown)
	}, [withTimer, question, setTimer, isAnswered])

	return (
		<article className='question'>
			<h2>{question.question}</h2>

			<ul>
				{question.options.map((option, idx) =>
					isAnswered ? (
						<li
							key={option}
							className={`answered
								${
									option === chosenAnwser
										? chosenAnwser === question.answer
											? 'isRight'
											: 'isWrong'
										: chosenAnwser !== question.answer &&
										  option === question.answer
										? 'isRight'
										: ''
								} 
							`}
						>
							{option}
						</li>
					) : (
						<li key={option} onClick={() => handleChosenAnser(option)}>
							{option}
						</li>
					)
				)}
			</ul>

			{isAnswered && !lastQuestion && (
				<p>
					Getting next question... <span className='loader'>⏳</span>
				</p>
			)}

			{isAnswered && lastQuestion && <p>Quiz has ended! 🏁</p>}

			{isAnswered && lastQuestion && !gameEnded && (
				<p>
					Computing final score... <span className='loader'>⏳</span>
				</p>
			)}
		</article>
	)
}

export default Question

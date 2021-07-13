import { useEffect, useState } from 'react'

function Question({ question, handleAnswers, lastQuestion, gameEnded }) {
	const [isAnswered, setIsAnswered] = useState(false)
	const [chosenAnwser, setChosenAnwser] = useState('')

	const handleClick = option => {
		setChosenAnwser(option)
		setIsAnswered(true)
		handleAnswers({
			id: question.id,
			isCorrectAnswer: question.answer === option,
		})
	}

	useEffect(() => {
		setChosenAnwser('')
		setIsAnswered(false)
	}, [question])

	return (
		<article className='question'>
			<h2>{question.question}</h2>
			
			<ul>
				{question.options.map((option, idx) =>
					isAnswered ? (
						<li
							key={option}
							className={`answered
								${option === chosenAnwser
									? chosenAnwser === question.answer
										? 'isRight'
										: 'isWrong'
									: chosenAnwser !== question.answer && option === question.answer ? 'isRight' : ''} 
							`}
						>
							{option}
						</li>
					) : (
						<li key={option} onClick={() => handleClick(option)}>
							{option}
						</li>
					)
				)}
			</ul>

			{isAnswered && !lastQuestion && <p>Getting next question... <span className='loader'>⏳</span></p>}

			{isAnswered && lastQuestion && <p>Quiz has ended! 🏁</p>}

			{isAnswered && lastQuestion && !gameEnded && <p>Computing final score... <span className='loader'>⏳</span></p>}
		</article>
	)
}

export default Question

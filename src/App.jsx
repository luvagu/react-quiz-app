import { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import CardsList from './components/CardsList'
import Header from './components/Header'

const decodeString = (string) => {
	const text = document.createElement('textarea')
	text.innerHTML = string
	return text.value
}

/**
 * 
 * @todo
 * fix flip answer background
 * add choose answer
 * add scores for correct and incorrect answers  
 */

function App() {
	const [isLoading, setIsLoading] = useState(false)
	const [categories, setCategories] = useState([])
	const [flashcards, setFlashcards] = useState([])
	const [options, setOptions] = useState({ amount: '10' })

	const handleChange = e => {
		setOptions(prevOptions => ({
			...prevOptions,
			[e.target.id]: e.target.value,
		}))
	}

	const handleSubmit = async e => {
		e.preventDefault()

		try {
			const { data } = await axios({
				method: 'GET',
				url: 'https://opentdb.com/api.php',
				params: options,
			})

			setFlashcards(data.results.map((questionItem, index) => {
        const answer = decodeString(questionItem.correct_answer)
        const wrongAnswers = [
          ...questionItem.incorrect_answers.map(a => decodeString(a)),
          answer
        ]
        return {
          id: `${index}-${Date.now()}`,
          question: decodeString(questionItem.question),
          answer: answer,
          options: wrongAnswers.sort(() => Math.random() - .5)
        }
      }))
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		setIsLoading(true)
		let cancel

		axios({
			method: 'GET',
			url: 'https://opentdb.com/api_category.php',
			cancelToken: new axios.CancelToken(c => (cancel = c)),
		})
			.then(({ data }) => {
				setCategories(data.trivia_categories)
				setIsLoading(false)
			})
			.catch(error => {
				if (axios.isCancel(error)) return
				console.log(error)
				setIsLoading(false)
			})

		return () => cancel()
	}, [])

	return (
		<Fragment>
			<Header
				categories={categories}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				isLoading={isLoading}
			/>
			<div className='container'>
				<CardsList flashcards={flashcards} />
			</div>
		</Fragment>
	)
}

export default App

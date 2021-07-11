import { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import CardsList from './components/CardsList'
import Header from './components/Header'

function App() {
	const [isLoading, setIsLoading] = useState(false)
	const [categories, setCategories] = useState([])
	const [flashcards, setFlashcards] = useState([])

	const handleChange = e => {}

	const handleSubmit = e => {}

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
			/>
			<div className='container'>
				<CardsList flashcards={flashcards} />
			</div>
		</Fragment>
	)
}

export default App

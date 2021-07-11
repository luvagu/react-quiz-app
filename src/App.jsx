import { Fragment, useState } from 'react'
import CardsList from './components/CardsList'
import Header from './components/Header'

function App() {
	const [categories, setCategories] = useState([])
	const [flashcards, setFlashcards] = useState([])

	const handleChange = e => {}
	const handleSubmit = e => {}

	return (
		<Fragment>
			<Header
				categories={categories}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
			<div className='container'>
				<CardsList flashcards={flashcards}  />
			</div>
		</Fragment>
	)
}

export default App

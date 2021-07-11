import FlashCard from './FlashCard'

function CardsList({ flashcards }) {
	return (
		<div className='card-grid'>
			{flashcards.map(flashcard => {
				return <FlashCard flashcard={flashcard} key={flashcard.id} />
			})}
		</div>
	)
}

export default CardsList

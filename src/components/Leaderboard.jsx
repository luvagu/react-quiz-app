import { useEffect, useState } from 'react'
import { getPlayers } from '../utils/fauna.helpers'

const mergeSortArray = arr => {
	const mergedEntriesIntoObject = arr.reduce((acc, val) => {
		const key = val.name.toLowerCase()
		if (key in acc) {
			acc[key] = { ...acc[key], score: acc[key].score + val.score }
		} else {
			acc[key] = val
		}
		return acc
	}, {})
	const sortedArrayByHighScore = Object.values(mergedEntriesIntoObject).sort(
		(a, b) => b.score - a.score
	)
	return sortedArrayByHighScore
}

const groupMergeSortArray = array => {
	const group = array.reduce((acc, val) => {
		const key = val.category
		if (key in acc) {
			acc[key].push(val)
		} else {
			acc[key] = [val]
		}
		return acc
	}, {})

	const merged = []
	for (const key in group) {
		const categoryMerged = mergeSortArray(group[key])
		merged.push({ category: key, scores: categoryMerged })
	}

	const sortedByCategoryNameAsc = merged.sort((a, b) => a.category > b.category)

	return sortedByCategoryNameAsc
}

function Leaderboard({ setError }) {
	const [isLoading, setIsLoading] = useState(false)
	const [leaderboard, setLeaderboard] = useState(null)
	const [topScorer, setTopScorer] = useState('')

	useEffect(() => {
		;(async () => {
			setIsLoading(true)
			try {
				const playerData = await getPlayers()
				if (!playerData.length) {
					return setIsLoading(false)
				}
				setTopScorer(mergeSortArray(playerData)[0])
				setLeaderboard(groupMergeSortArray(playerData))
			} catch (error) {
				console.log(error)
				setError('🙁 Error loading leaderboard.')
			}
			setIsLoading(false)
		})()
	}, [setError])

	return (
		<div className='leaderboard'>
			<h1>Leaderboard 🏆</h1>

			{topScorer && (
				<div className='leaderboard-group gold'>
					<h3>Overall Top Scorer</h3>
					<span>
						🥇 {topScorer.name} - {topScorer.score}
					</span>
				</div>
			)}

			{leaderboard &&
				leaderboard.map(({ category, scores }) => (
					<div key={category} className='leaderboard-group'>
						<h3>{category}</h3>
						<ul>
							{scores.map((player, idx) => (
								<li key={player.id}>
									{idx === 0 && '🥇 '}
									{idx === 1 && '🥈 '}
									{idx === 2 && '🥉 '}
									{player.name} - {player.score}
								</li>
							))}
						</ul>
					</div>
				))}

			{isLoading && <h3>Loading leaderboard...</h3>}

			{!leaderboard && !isLoading && <h3>No scores yet!</h3>}
		</div>
	)
}

export default Leaderboard

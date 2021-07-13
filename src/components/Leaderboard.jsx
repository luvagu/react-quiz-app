import { useEffect, useState } from 'react'
import { getPlayers } from '../utils/fauna.helpers'

const mergeAndSortArray = arr => {
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
		(a, b) => a.score < b.score
	)
	return sortedArrayByHighScore
}

function Leaderboard({ setError }) {
	const [leaderboard, setLeaderboard] = useState(null)

	useEffect(() => {
		// setError(false)
		;(async () => {
			try {
				const playerData = await getPlayers()
				if (!playerData.length) return
				setLeaderboard(mergeAndSortArray(playerData))
			} catch (error) {
				console.log(error)
				setError('🙁 Error loading leaderboard.')
			}
		})()
	}, [setError])

	return (
		<div className='leaderboard'>
			<h1>Leaderboard 🏆</h1>
			<ul>
				{leaderboard ? (
					leaderboard.map((player, idx) => (
						<li key={player.id}>
							{idx === 0 && '🥇 '}
							{idx === 1 && '🥈 '}
							{idx === 2 && '🥉 '}
							{player.name} - {player.score}
						</li>
					))
				) : (
					<li>No scores yet!</li>
				)}
			</ul>
		</div>
	)
}

export default Leaderboard

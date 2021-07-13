import { Fragment, useEffect, useState } from 'react'
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
		(a, b) => a.score < b.score
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

	return merged
}

function Leaderboard({ setError }) {
	const [leaderboard, setLeaderboard] = useState(null)

	useEffect(() => {
		;(async () => {
			try {
				const playerData = await getPlayers()
				if (!playerData.length) return
				setLeaderboard(groupMergeSortArray(playerData))
			} catch (error) {
				console.log(error)
				setError('🙁 Error loading leaderboard.')
			}
		})()
	}, [setError])

	return (
		<div className='leaderboard'>
			<h1>Leaderboard 🏆</h1>
			{leaderboard ? (
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
				))
			) : (
				<h3>No scores yet!</h3>
			)}
		</div>
	)
}

export default Leaderboard

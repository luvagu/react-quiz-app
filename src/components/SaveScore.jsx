import { Fragment, useState } from 'react'

function SaveScore({ score, lsKey, resetGame }) {
	const [playerName, setPlayerName] = useState('')

	const saveScore = e => {
		e.preventDefault()

		if (!playerName || !score || !lsKey) return

		const currentLeaderboard = JSON.parse(localStorage.getItem(lsKey)) || null

		const playerData = { id: Date.now(), playerName, score }

		localStorage.setItem(
			lsKey,
			JSON.stringify(
				currentLeaderboard ? [...currentLeaderboard, playerData] : [playerData]
			)
		)

		resetGame()
	}

	return (
		<form className='score-form' onSubmit={saveScore}>
			{score ? (
				<Fragment>
					<h3>You got a score! 🙌</h3>
					<p>Enter your name below to save your score.</p>
					<input
						type='text'
						value={playerName}
						placeholder='Enter your name'
						onChange={e => setPlayerName(e.target.value.trim())}
						required
					/>
					<button className='btn' type='submit'>
						Save
					</button>
					<span>or</span>
				</Fragment>
			) : (
				<h3>You didn&apos;t get a score! 😥</h3>
			)}

			<button className='btn' type='button' onClick={() => resetGame()}>
				Back to Leaderboard
			</button>
		</form>
	)
}

export default SaveScore

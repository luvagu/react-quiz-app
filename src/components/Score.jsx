function Score({ score, timer, withTimer }) {
	return (
		<div className='score-timer-container'>
			{withTimer && (
				<div className='score-timer-border'>
					<div className='score-timer-text'>Timer</div>
					<div className='score-timer-number'>{timer}</div>
				</div>
			)}
			<div>
				<div className='score-timer-text'>Score</div>
				<div className='score-timer-number'>{score}</div>
			</div>
		</div>
	)
}

export default Score

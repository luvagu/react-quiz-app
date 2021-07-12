function Progress({ questionNum, totalQuestions, percentage }) {
	return (
		<div className='progress-conatiner'>
			<div className='progress-text'>Question {questionNum} of {totalQuestions}</div>
			<div className='progress-bar-box'>
				<div className='progress-bar' style={{ width: `${percentage}%` }}></div>
			</div>
		</div>
	)
}
export default Progress

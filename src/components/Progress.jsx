import { useEffect, useRef } from 'react'

function Progress({ questionNum, totalQuestions, percentage }) {
	const progressRef = useRef()

	useEffect(() => {
		progressRef.current.style.setProperty('--progress', percentage)
	}, [percentage])

	return (
		<div className='progress-conatiner'>
			<div className='progress-text'>
				Question {questionNum} of {totalQuestions}
			</div>
			<div ref={progressRef} className='progress-bar'></div>
		</div>
	)
}
export default Progress

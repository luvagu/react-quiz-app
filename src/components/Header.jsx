function Header({
	categories,
	handleSubmit,
	handleChange,
	setWithTimer,
	loadingCategories,
	loadingQuestions,
	quizInProgress,
	defaultNumOfQuestions,
}) {
	return (
		<header>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor='category'>Category</label>
					{loadingCategories ? (
						<span>Loading categories...</span>
					) : (
						<select
							id='category'
							defaultValue='9'
							onChange={handleChange}
							disabled={loadingCategories || quizInProgress}
						>
							{categories.map(category => (
								<option value={category.id} key={category.id}>
									{category.name}
								</option>
							))}
						</select>
					)}
				</div>
				<div className='form-group'>
					<label htmlFor='difficulty'>Difficulty</label>
					<select
						id='difficulty'
						defaultValue=''
						onChange={handleChange}
						disabled={loadingCategories || quizInProgress}
					>
						<option value=''>Any Difficulty</option>
						<option value='easy'>Easy</option>
						<option value='medium'>Medium</option>
						<option value='hard'>Hard</option>
					</select>
				</div>
				<div className='form-group'>
					<label htmlFor='type'>Type</label>
					<select
						id='type'
						defaultValue=''
						onChange={handleChange}
						disabled={loadingCategories || quizInProgress}
					>
						<option value=''>Any Type</option>
						<option value='multiple'>Multiple Choice</option>
						<option value='boolean'>True / False</option>
					</select>
				</div>
				<div className='form-group'>
					<label htmlFor='timer'>Timer</label>
					<select
						id='timer'
						defaultValue=''
						onChange={e => setWithTimer(parseInt(e.target.value) === 0 ? false : parseInt(e.target.value))}
						disabled={loadingCategories || quizInProgress}
					>
						<option value='0'>No</option>
						<option value='5'>5s</option>
						<option value='10'>10s</option>
						<option value='15'>15s</option>
					</select>
				</div>
				<div className='form-group'>
					<label htmlFor='amount'>Questions</label>
					<input
						type='number'
						id='amount'
						min='5'
						max='50'
						step='5'
						defaultValue={defaultNumOfQuestions}
						onChange={handleChange}
						disabled={loadingCategories || quizInProgress}
					/>
				</div>
				<div className='form-group'>
					<button
						className='btn'
						type='submit'
						disabled={loadingCategories || quizInProgress}
					>
						{loadingQuestions
							? 'Loading...'
							: quizInProgress
							? 'Quiz in progress'
							: 'Generate New Quiz'}
					</button>
				</div>
			</form>
		</header>
	)
}

export default Header

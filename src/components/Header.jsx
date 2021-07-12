function Header({
	categories,
	handleSubmit,
	handleChange,
	loadingCategories,
	loadingQuestions,
}) {
	return (
		<header>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor='category'>Category</label>
					{loadingCategories ? (
						<span>Loading categories...</span>
					) : (
						<select id='category' onChange={handleChange}>
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
					<select id='difficulty' defaultValue='any' onChange={handleChange}>
						<option value='any'>Any Difficulty</option>
						<option value='easy'>Easy</option>
						<option value='medium'>Medium</option>
						<option value='hard'>Hard</option>
					</select>
				</div>
				<div className='form-group'>
					<label htmlFor='type'>Type</label>
					<select id='type' defaultValue='any' onChange={handleChange}>
						<option value='any'>Any Type</option>
						<option value='multiple'>Multiple Choice</option>
						<option value='boolean'>True / False</option>
					</select>
				</div>
				<div className='form-group'>
					<label htmlFor='amount'>Questions</label>
					<input
						type='number'
						id='amount'
						min='5'
						step='5'
						max='50'
						defaultValue={10}
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<button className='btn' type='submit' disabled={loadingCategories}>
						{loadingQuestions ? 'Loading...' : 'Generate Quiz'}
					</button>
				</div>
			</form>
		</header>
	)
}

export default Header

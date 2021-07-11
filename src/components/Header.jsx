function Header({ categories, handleSubmit, handleChange }) {
	return (
		<header>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor='category'>Category</label>
					<select
						id='category'
						onChange={handleChange}
					>
						{categories.map(category => (
							<option value={category.id} key={category.id}>
								{category.name}
							</option>
						))}
					</select>
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
					<label htmlFor='amount'>Number of Questions</label>
					<input
						type='number'
						id='amount'
						min='1'
						step='1'
						defaultValue={10}
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<button className='btn' type='submit'>
						Generate
					</button>
				</div>
			</form>
		</header>
	)
}

export default Header

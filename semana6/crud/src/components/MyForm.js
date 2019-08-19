import React from 'react'

const MyForm = props => {
	return (
		<>
			<div class='form-group'>
				<label for='exampleFormControlInput1'>Title</label>
				<input
					type='text'
					class='form-control'
					id='title'
					onChange=''
					placeholder='Title'
				/>
			</div>
			<div class='form-group'>
				<label for='exampleFormControlInput1'>Image</label>
				<input
					type='text'
					class='form-control'
					id='title'
					onChange=''
					placeholder='Image URL'
				/>
			</div>
			<div class='form-group'>
				<label for='exampleFormControlTextarea1'>Description</label>
				<textarea
					class='form-control'
					id='description'
					onChange=''
					rows='3'
				/>
			</div>
		</>
	)
}

export default MyForm

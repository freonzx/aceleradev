import React from 'react'
import MyForm from './../components/MyForm'

const CreateItem = props => {
	return (
		<div className='container mt-3'>
			<h2>Create Item</h2>
			<hr />
			<MyForm />
			<button className='btn btn-primary' onClick=''>
				Create
			</button>
		</div>
	)
}

export default CreateItem

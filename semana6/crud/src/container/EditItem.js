import React from 'react'
import MyForm from '../components/MyForm'

const EditItem = props => {
	return (
		<div className='container mt-3'>
			<h2>Edit Item</h2>
			<hr />
			<MyForm />
			<button className='btn btn-primary' onClick=''>
				Edit
			</button>
		</div>
	)
}

export default EditItem

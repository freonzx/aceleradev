import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const ShowItem = ({ product }) => {
	if (product === null) {
		return <Redirect to='/' />
	}

	return (
		<div className='container mt-3'>
			<h3>Ver informações</h3>
			<hr />
			{product ? (
				<div className='text-center'>
					<img src={product.image} alt='' />
					<h5>Title:</h5> <p>{product.title}</p>
					<h5>Description:</h5> <p>{product.desc}</p>
				</div>
			) : null}
		</div>
	)
}

const MapStateToProps = state => {
	return {
		product: state.selected
	}
}

export default connect(MapStateToProps)(ShowItem)

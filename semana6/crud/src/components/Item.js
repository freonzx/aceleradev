import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Item = ({ title, image, desc, select }) => {
	return (
		<div className='col-4'>
			<div className='card' style={{ width: '18rem' }}>
				<img
					className='card-img-top'
					src={image}
					alt='Imagem de capa do card'
				/>
				<div className='card-body'>
					<h5 className='card-title'>{title}</h5>
					<p className='card-text'>{desc}</p>
					<Link
						to='/show/'
						onClick={() => select({ title, image, desc })}
						className='btn btn-info'
					>
						Ver
					</Link>
					{'    '}
					<a href='/edit/' className='btn btn-primary'>
						Editar
					</a>
					{'    '}
					<a
						href='/'
						className='btn btn-danger'
						onClick={e => {
							e.preventDefault()
							if (
								window.confirm(
									'Are you sure you wish to delete this item?'
								)
							)
								this.onCancel()
						}}
					>
						Deletar
					</a>
				</div>
			</div>
		</div>
	)
}

export default connect()(Item)

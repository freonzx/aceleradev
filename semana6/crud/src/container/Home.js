import React, { Component } from 'react'
import Item from '../components/Item'
import MockData from '../seeds/mock'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component {
	render() {
		const selectDispatch = item => {
			console.log(item)
			this.props.dispatch({ type: 'SELECT_CARD', payload: item })
		}

		return (
			<div className='container mt-3'>
				<h2>
					Read Records{' '}
					<Link to='/create/' className='btn btn-primary my-3'>
						Create
					</Link>
				</h2>
				<hr />

				<div className='row'>
					{this.props.items.map(e => {
						return (
							<Item
								key={e.id}
								title={e.title}
								desc={e.description}
								image={e.image}
								select={selectDispatch}
							/>
						)
					})}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		items: state.data
	}
}

export default connect(mapStateToProps)(Home)

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div>
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
				<Link className='navbar-brand' to='/'>
					React CRUD
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Alterna navegação'
				>
					<span className='navbar-toggler-icon' />
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item active'>
							<Link className='nav-link' to='/'>
								Home
							</Link>
						</li>
					</ul>
				</div>

				<form class='form-inline'>
					<input
						class='form-control mr-sm-2'
						type='search'
						placeholder='Pesquisar'
						aria-label='Pesquisar'
					/>
					<button class='btn btn-success my-2 my-sm-0' type='submit'>
						Search
					</button>
				</form>
			</nav>
		</div>
	)
}

export default Navbar

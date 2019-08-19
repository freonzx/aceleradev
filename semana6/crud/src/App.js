import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Layout/Navbar'
import Home from './container/Home'
import { Route, withRouter } from 'react-router-dom'
import ShowItem from './components/ShowItem'
import CreateItem from './container/CreateItem'
import EditItem from './container/EditItem'
import { connect } from 'react-redux'

class App extends Component {
	// async componentDidMount() {
	// 	await this.setState({ data: MockData })
	// }

	// handleItemSelected = item => {
	// 	this.setState({ selected: item })
	// 	console.log(this.state.selected)
	// }

	render() {
		console.log(this.state)
		return (
			<>
				<Navbar />
				<Route exact path='/' component={props => <Home />} />
				<Route
					path='/show/'
					render={props => <ShowItem {...props} />}
				/>
				<Route
					exact
					path='/create/'
					render={props => <CreateItem {...props} />}
				/>
				<Route exact path='/edit/' component={EditItem} />
			</>
		)
	}
}

const mapStateToProps = state => {
	return {
		data: state.data,
		selected: state.selected
	}
}

export default connect(mapStateToProps)(App)

import React, { Component } from "react";

export default class index extends Component {
	state = {
		content: ""
	};

	handleChange = e => {
		this.setState({ [e.target.id]: e.target.value });
	};

	render() {
		return (
			<div className="container text-center mt-3">
				<input
					value={this.state.content}
					type="text"
					id="content"
					className="text-area"
					onChange={this.handleChange}
				/>
				<button className="btn btn-success">Postar</button>
			</div>
		);
	}
}

import React, { Component } from "react";
import Title from "./components/Title";
import Posts from "./components/Posts/Post";

class SegundoApp extends Component {
	state = {
		posts: [
			{ title: "Primeiro post", content: "Content do post" },
			{ title: "Segundo post", content: "Content do post" }
		],
		content: "",
		counter: 0,
		message: "",
		messageArray: []
	};

	handleChange = e => {
		this.setState({ [e.target.id]: e.target.value });
	};

	incrementClick = e => {
		const newCounter = this.state.counter + 1;
		const newMessage = `${this.state.message} Counter -> ${newCounter} `;
		console.log(this.state);
		this.setState({
			counter: newCounter,
			messageArray: this.state.messageArray.concat(newMessage)
		});
	};
	render() {
		return (
			<div className="text-center">
				<Title text="Teste1" body="Body content" />
				<input
					id="content"
					className="text-area"
					onChange={this.handleChange}
					type="text"
				/>
				<p>{this.state.content}</p>
				<hr />
				<button onClick={this.incrementClick} className="btn btn-info">
					Increment Counter
				</button>
				{this.state.messageArray.map(e => {
					return <p>{e}</p>;
				})}
			</div>
		);
	}
}

export default SegundoApp;

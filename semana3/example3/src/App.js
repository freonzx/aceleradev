import React, { Component } from "react";
import List from "./components/List";

export default class App extends Component {
	state = {
		posts: [],
		query: "",
		newest: "",
		message: ""
	};

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/todos/")
			.then(response => response.json())
			.then(json => {
				console.log(json);
				this.setState({ posts: json });
			});
	}

	handleChange = e => {
		this.setState({ [e.target.id]: e.target.value });
		//console.log(this.state);
	};

	handleClick = e => {
		e.preventDefault();

		const existe = this.state.posts.filter(e => {
			return e.title.toLowerCase() === this.state.query.toLowerCase();
		});

		if (existe.length >= 1) {
			this.setState({
				message: "Elemento ja existe e não pode ser adicionado"
			});
			return;
		} else {
			this.setState({ message: "" });
		}

		this.setState({
			posts: this.state.posts.concat({
				completed: "false",
				id: Math.random() * 15,
				title: this.state.query,
				userId: 255
			}),
			query: "",
			newest: this.state.query
		});
		console.log(this.state);
	};

	render() {
		const { posts, query, message } = this.state;
		const filtered = posts.filter(p => {
			return p.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
		});
		return (
			<div className="container mt-3">
				<form onSubmit={this.handleClick}>
					<input
						className="form-control"
						type="text"
						id="query"
						value={query}
						onChange={this.handleChange}
					/>
				</form>
				<p className="text-warning my-2">{message}</p>
				<button className="btn btn-info my-3" onClick={this.handleClick}>
					ADD
				</button>
				<List>
					{filtered.map(e => {
						return (
							<li className="list-group-item" key={e.id}>
								{e.title === this.state.newest ? (
									<p style={{ background: "yellow" }}>{e.title}</p>
								) : (
									<p>{e.title}</p>
								)}
							</li>
						);
					})}
				</List>
			</div>
		);
	}
}

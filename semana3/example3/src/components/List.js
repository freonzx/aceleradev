import React, { Component } from "react";

export default class List extends Component {
	render() {
		return (
			<div>
				<ul className="list-group">{this.props.children}</ul>
			</div>
		);
	}
}

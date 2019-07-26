import React from "react";

const Titulo = props => {
	return (
		<div className="container mt-3">
			<h4 className="text-center">{props.text}</h4>
			<p>{props.body}</p>
			<hr />
		</div>
	);
};

export default Titulo;

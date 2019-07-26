import React from "react";
//import logo from './logo.svg';
import "./App.css";

//Testando estilização com objeto que pode ser reutilizado em diversas partes
const styleObject = {
	fontFamily: "Arial"
};

// Componente recebendo props, desconstruindo a prop text e utilizando ela
const Title = ({ text }) => {
	return (
		<h3 className="text-info" style={styleObject}>
			{text}
		</h3>
	);
};

function App() {
	return (
		<div className="App">
			<div className="container text-center mt-5">
				<p className="">
					<Title text="Hello world" />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odit ad
					doloribus quis laborum odio quasi sequi facilis eaque expedita fugiat
					distinctio molestiae eius, numquam, deleniti, dicta ipsam dignissimos
					perferendis?
				</p>
			</div>
		</div>
	);
}

export default App;

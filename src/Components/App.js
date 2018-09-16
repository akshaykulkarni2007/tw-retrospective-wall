import React, { Component } from "react"

import Board from "./Board/Board"

import "./App.css"

class App extends Component {
	render() {
		return (
			<div className="App">
				<nav className="navbar navbar-dark bg-dark">
					<a className="navbar-brand" href="#!">
						TW Retrospective Wall
					</a>
				</nav>

				<h1 className="text-center my-5">TW Retrospective Wall</h1>

				<Board />
			</div>
		)
	}
}

export default App

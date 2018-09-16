import React, { Component } from "react"

import Card from "../Card/Card"

class Board extends Component {
	state = {
		currentSection: "",
		well: [],
		notSo: [],
		work: [],
		actions: [],
		inputValue: "",
		cardText: "",
		temp: null
	}

	renderCard = section =>
		this.state[section].map(item => (
			<Card key={Math.random() * 1000} text={item} />
		))

	addCard = section => {
		this.state.currentSection = section
		this.setState({
			temp: (
				<Card
					text=""
					value={this.state.inputValue}
					handleChange={this.handleChange}
					handleKeyUp={this.handleKeyUp}
				/>
			)
		})
	}

	handleChange = e => {
		this.setState({
			inputValue: e.target.value
		})
	}
	handleKeyUp = e => {
		if (e.keyCode === 13) {
			let currentSection = this.state.currentSection
			this.setState({
				[currentSection]: [...this.state[currentSection], e.target.value],
				currentSection: "",
				inputValue: "",
				cardText: "",
				temp: null
			})
		}
	}

	render() {
		return (
			<div id="board">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xs-12 col-md-6">
							<h2 className="text-center text-capitalize">
								what went well
								<small>
									<button
										className="btn btn-success btn-sm align-middle"
										onClick={() => this.addCard("well")}>
										+
									</button>
								</small>
							</h2>
							{this.renderCard("well")}
							{this.state.temp}
						</div>
						<div className="col-xs-12 col-md-6">
							<h2 className="text-center text-capitalize">what didnt</h2>
						</div>
						<div className="col-xs-12 col-md-6">
							<h2 className="text-center text-capitalize">what needs work</h2>
						</div>
						<div className="col-xs-12 col-md-6">
							<h2 className="text-center text-capitalize">action items</h2>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Board

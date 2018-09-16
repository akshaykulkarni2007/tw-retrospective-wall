import React, { Component } from "react"

import Card from "../Card/Card"

class Board extends Component {
	state = {
		well: [],
		notSo: [],
		work: [],
		actions: []
	}

	renderCard = section =>
		this.state[section].map(item => (
			<Card key={Math.random() * 1000} text={item} />
		))

	addCard = section => {
		this.setState({
			[section]: [...this.state[section], ""]
		})

		console.log(this.state[section])
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

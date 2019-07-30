import React, { Component } from "react"

import Card from "../Card/Card"

class Board extends Component {
	state = {
		cards: [],
		inputValue: "",
		currentSection: "",
		temp: null
	}

	renderCard = section => {
		const cardsToRender = this.state.cards.filter(card => card.section === section)

		return cardsToRender.map(card => <Card key={Math.random() * 1000} text={card.text} />)
	}

	addCard = section => {
		this.setState({
			temp: (
				<Card
					text=""
					value={this.state.inputValue}
					handleChange={this.handleChange}
					handleKeyUp={this.handleKeyUp}
				/>
			),
			currentSection: section
		})
	}

	handleChange = e => {
		this.setState({
			inputValue: e.target.value
		})
	}

	handleKeyUp = e => {
		if (e.keyCode === 13) {
			const newCard = {section: this.state.currentSection, text: this.state.inputValue}
			this.setState(
				{
					cards: [...this.state.cards, newCard],
					inputValue: "",
					temp: null
				},
				() => {
					this.setToLS()
				}
			)
		}
	}

	getTitle = section => this.state.keyToTitle.get(section)

	closeModal = () => {
		this.setState({
			currentSection: "",
			inputValue: "",
			temp: null
		})
	}

	getFromLS = () => {
		if (localStorage.getItem("retro-cards")) {
			const data = JSON.parse(localStorage.getItem("retro-cards"))
			this.setState({
				cards: data
			})
		}
	}

	setToLS = () => {
		localStorage.setItem("retro-cards", JSON.stringify(this.state.cards))
	}

	componentDidMount() {
		this.getFromLS()
	}

	render() {
		return (
			<div id="board">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xs-12 col-md-6 retro-area">
							<h2 className="text-center text-capitalize text-success">
								what went well
								<small>
									<span
										className="badge badge-success"
										onClick={() => this.addCard("well")}>
										+
									</span>
								</small>
							</h2>
							{this.renderCard("well")}
						</div>
						<div className="col-xs-12 col-md-6 retro-area">
							<h2 className="text-center text-capitalize text-danger">
								what didnt
								<small>
									<span
										className="badge badge-success"
										onClick={() => this.addCard("notSo")}>
										+
									</span>
								</small>
							</h2>
							{this.renderCard("notSo")}
						</div>
						<div className="col-xs-12 col-md-6 retro-area">
							<h2 className="text-center text-capitalize text-warning">
								what needs work
								<small>
									<span
										className="badge badge-success"
										onClick={() => this.addCard("work")}>
										+
									</span>
								</small>
							</h2>
							{this.renderCard("work")}
						</div>
						<div className="col-xs-12 col-md-6 retro-area">
							<h2 className="text-center text-capitalize text-primary">
								action items
								<small>
									<span
										className="badge badge-success"
										onClick={() => this.addCard("actions")}>
										+
									</span>
								</small>
							</h2>
							{this.renderCard("actions")}
						</div>
					</div>
				</div>

				{this.state.temp ? (
					<div className="input-box col-xs-12 col-lg-6 mx-auto">
						<h1 className="text-capitalize">
							Add <em>{this.state.currentSection}</em>
							<small>
								<span
									onClick={this.closeModal}
									className="badge badge-danger float-right align-top">
									x
								</span>
							</small>
						</h1>
						{this.state.temp}
					</div>
				) : (
					""
				)}
			</div>
		)
	}
}

export default Board

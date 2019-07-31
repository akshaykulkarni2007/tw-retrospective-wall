import React, {Component} from "react"

import Card from "../Card/Card"

class Board extends Component {
	state = {
		cards: [],
		inputValue: "",
		currentSection: "",
		temp: null
	}

	renderSection = (sectionId, sectionTitle, contextClass) => (
		<div className="col-xs-12 col-md-6 retro-area">
			<h2 className={"text-center text-capitalize text-" + contextClass}>
				{sectionTitle}
				<small>
					<span
						className="badge badge-success"
						onClick={() => this.addCard(sectionId)}>
						+
					</span>
				</small>
			</h2>
			<div className="container retro-cards">
				<div className="row">{this.renderCard(sectionId)}</div>
			</div>
		</div>
	)
	renderCard = section => {
		const cardsToRender = this.state.cards.filter(
			card => card.section === section
		)

		return cardsToRender.map(card => (
			<Card key={Math.random() * 1000} text={card.text} />
		))
	}

	addCard = section => {
		this.setState({
			temp: (
				<Card
					text=""
					classes="col-xs-12"
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
			const newCard = {
				section: this.state.currentSection,
				text: this.state.inputValue
			}
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
						{this.renderSection("well", "what went well", "success")}
						{this.renderSection("notSo", "what didnt", "danger")}
						{this.renderSection("work", "what needs work", "warning")}
						{this.renderSection("actions", "action items", "info")}
					</div>
				</div>

				{this.state.temp ? (
					<div className="input-box col-md-6 mx-auto">
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

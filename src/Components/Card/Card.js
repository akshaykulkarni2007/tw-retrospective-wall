import React, { Component } from "react"

class Card extends Component {
	state = {
		inputValue: "",
		cardText: ""
	}
	handleChange = e => {
		this.setState({
			inputValue: e.target.value
		})
	}
	handleKeyUp = e => {
		if (e.keyCode === 13) {
			this.setState({
				cardText: e.target.value
			})
		}
	}
	render() {
		console.log(this.props)
		return (
			<div className="card">
				<div className="card-body">
					{this.props.text === "" && this.state.cardText === "" ? (
						<input
							value={this.state.inputValue}
							onChange={this.handleChange}
							onKeyUp={this.handleKeyUp}
							type="text"
						/>
					) : (
						this.state.cardText
					)}
				</div>
			</div>
		)
	}
}

export default Card

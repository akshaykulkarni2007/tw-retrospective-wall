import React from "react"

const Card = props => {
	return (
		<div className="card">
			<div className="card-body">
				{props.text === "" ? (
					<input
						value={props.inputValue}
						onChange={props.handleChange}
						onKeyUp={props.handleKeyUp}
						type="text"
					/>
				) : (
					props.text
				)}
			</div>
		</div>
	)
}

export default Card

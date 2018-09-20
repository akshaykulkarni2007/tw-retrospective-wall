import React from "react"

const Card = props => {
	return (
		<div className="card col-xs-12 ">
			<div className="card-body text-center">
				{props.text === "" ? (
					<input
						className="form-control"
						value={props.inputValue}
						onChange={props.handleChange}
						onKeyUp={props.handleKeyUp}
						type="text"
						autoFocus
					/>
				) : (
					props.text
				)}
			</div>
		</div>
	)
}

export default Card

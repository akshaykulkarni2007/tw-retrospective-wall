import React from "react"

const Card = ({text, classes, inputValue, handleChange, handleKeyUp}) => {
	const cols = classes !== undefined ? classes : "col-md-4"
	return (
		<div className={"card m-1 " + cols}>
			<div className="card-body text-center">
				{text === "" ? (
					<input
						className="form-control"
						value={inputValue}
						onChange={handleChange}
						onKeyUp={handleKeyUp}
						type="text"
						autoFocus
					/>
				) : (
					text
				)}
			</div>
		</div>
	)
}

export default Card

import React from "react"
import "../stylesheets/Button.css"

function Button({ text, addFile }){
	return(
		<button 
			className = 'button'
			onClick = {addFile} >
			{text}
		</button>
	)
}

export default Button
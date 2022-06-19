import React from "react"
import "../stylesheets/LoginBtn.css"
import icongoogle from "../images/icongoogle.png"


function LoginButton ({ text, onClick }){
	return(
		<button 
			className = 'login-button' 
			onClick = {onClick}>
			<img 
				className = 'google-icon'
				src = {icongoogle} 
				alt = 'google logo' /> 
			{text}
		</button>
	)
}

export default LoginButton
import React from "react"
import "../stylesheets/LoginButton.css"
import GoogleLogo from "../images/googleLogo.png"


function LoginButton ({ text, onClick }){
	return(
		<button 
			className = 'login-button' 
			onClick = {onClick}>
			<img 
				className = 'google-logo'
				src = {GoogleLogo} 
				alt = 'google logo' /> 
			{text}
		</button>
	)
}

export default LoginButton
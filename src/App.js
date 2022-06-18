import "./App.css"
import React from "react"
import Button from "./components/Button"
import DropZoneComponent from "./components/DropZoneComponent"
import LoginButton from "./components/LoginButton"
import  { useEffect } from "react"
import useDrivePicker from "react-google-drive-picker"
// import React, {useCallback} from "react"



function App() {

	const [openPicker, data] = useDrivePicker()

	const handleOpenPicker = () => {
		openPicker({
			clientId: "480725159967-rcbuikj157icluod5hjl3dbum0kdj7aa.apps.googleusercontent.com",
			developerKey: "AIzaSyBUyWW8wWsJY5QUxr1ty1y_Y19j77mjsbE",
			token: "ya29.a0ARrdaM8xhyD9L_86Pb1Mo8zxXsLc6HnK7yB6gZPB3AUkzIMWaHBeKoWqrlsS6SrNjUlGOMVmY1VyqG1jkXQaGNcaXHd-7c2l9SME6hTIEp48GKfLxLr3AZUfx1vxg1OR1GXPxSQ8VdXyAzGBguDEoXf5t3fC",
			viewId: "DOCS",
			showUploadView: true,
			showUploadFolders: true,
			supportDrives: true,
			multiselect: true,

			callbackFunction: (data) => {
				if (data.action === "cancel") {
					console.log("User clicked cancel/close button")
				}
				console.log(data)
			},
		})
		
		useEffect( () => {
			if (data){
				data.docs.map((i) => console.log(i))
			}
		},[data])
	}

	return (
		<div className="App">
			<>
				<div className = 'dropZone-container'>
					<div className = 'green-container'>
					</div>
					<DropZoneComponent/>
					<Button 
						text = 'Subir tus archivos' /> 
				</div>

				<div className = 'login-welcome-container'>
					<h2>Bienvenido a DDrop</h2>
					<h6>Para subir tus archivos de forma simple a drive, puedes hacer LogIn a través de Google.</h6>
					<hr className = 'line' />
					<LoginButton
						className = 'login-container'
						text = 'Login con Google'
						onClick = {()=>handleOpenPicker()} />
				</div>
			</>

		</div>
	)
}

export default App
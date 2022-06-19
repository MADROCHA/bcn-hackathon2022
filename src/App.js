import "./App.css"

import DropZoneComponent from "./components/DropZoneComponent"
import LoginButton from "./components/LoginButton"
import React, { useEffect } from "react"
import useDrivePicker from "react-google-drive-picker"


function App() {

	const [openPicker, data] = useDrivePicker()

	const handleOpenPicker = () => {
		openPicker({
			clientId: "480725159967-41olb50nboog8ekmkl0umj12cr86ho12.apps.googleusercontent.com",
			developerKey: "AIzaSyAa8PCU_SqB9PmRvraUJFhZHOAjZXqIjWE",
			refresh_token: "1//046QgA9w3_I0eCgYIARAAGAQSNgF-L9IrENRlB82iL1JRuWHO9lIdN2yrNfRv-lCxMGvIXKwelx9q-r84GD7xMZ_fQf_xvcdt1w",
			viewId: "DOCS",
			showUploadView: true,
			showUploadFolders: true,
			supportDrives: true,
			multiselect: true,
				
			});
		}
		
		useEffect( () => {
			if (data){
		data.docs.map((i) => console.log(i));
			}
		},[data])
	
	return (
		<div className="App">
		<>
			<div className = 'dropZone-container'>
			<div className = 'green-container'>
			
			</div>
			<DropZoneComponent></DropZoneComponent>
			</div>

			<div className = 'login-welcome-container'>
			<h2>Bienvenido a DDrop</h2>
			<h6>Para subir tus archivos de forma simple a drive, puedes hacer LogIn a través de Google.</h6>
			<hr className = 'line' />
			<LoginButton
				className = 'login-container'
				text = 'Login con Google'
				onClick = {()=>handleOpenPicker()} 
				type = "button"/>
		</div>
		</>
		</div>
	)
}

export default App
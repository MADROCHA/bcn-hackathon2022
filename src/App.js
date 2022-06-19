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
			clientId: "480725159967-9qq8pqvis21qk4cupsil934ht799i7c4.apps.googleusercontent.com",
			developerKey: "AIzaSyAw1O_czCMHbAl4x5SB4t5qr-0CnUPSxMw",
			token: "ya29.A0ARrdaM_6jOlXrxdUmjxp0dXu7ebsNi8xQIoR4lpeSI3mOqGaew51vGbDAwlaEpWTqW_UV_WwEWXHM3JSje1EtBiDzdrwxz0PBBl7WRus7JdMmLXY5GgfBQjhXqjpPoSWvrBPUcgj0DvyIL7Q-r-kWT1_DSO4YUNnWUtBVEFTQVRBU0ZRRl91NjFWd1hGbk9xemRYNmxIeWs2aUdiYTdzQQ0163",
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
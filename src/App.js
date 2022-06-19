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
			clientId: "480725159967-qlhs4bfie3e5tc9fqcb2efvgn03ggl0b.apps.googleusercontent.com",
			developerKey: "AIzaSyDYbTnIU1Rj2YOEBTlOukYtLjDwuBmHdvI",
			token: "ya29.a0ARrdaM82B63Ranr-hf-eDD0MRC_juWY3QKaPnhoMwXYXDBGGYanv7riw4_RNeoW-HL12cv_tA-tFP22xgtkLGt7qiMHxkT9C5k5GPfvn31VSkTAoSWfdc_G5XNrqsdBNmcFuqNwbFc1SDIvMNR2U0eLSinri",
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
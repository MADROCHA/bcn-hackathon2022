import React from "react"
import "../stylesheets/DropZoneComponent.css"
import FileBackground from "../images/fileBackground.png"
// import Dropzone, {useDropzone} from "react-dropzone"

function DropZoneComponent(){
	return(
		<div className = 'dropzone-container'>
			<p> ARRASTRA TUS ARCHIVOS AQUÍ </p>
			<img
				className = 'fileBackground-image'
				src = {FileBackground} 
				alt = 'background for the dropzone container'/>

		</div>
	)
}

export default DropZoneComponent
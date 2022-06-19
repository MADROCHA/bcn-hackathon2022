import "../stylesheets/DropZoneComponent.css"
import dropbg from "../images/dropbg.png"
import Button from "./Button"
import React, { useCallback, useState } from "react"
import {useDropzone} from "react-dropzone"

function DropZoneComponent(){

	const [selectedFile, setSelectedFile] = useState([]);
	
	const onDrop = useCallback(acceptedFiles => {
		setSelectedFile(acceptedFiles.map(file => 
            Object.assign(file,{
                preview: URL.createObjectURL(file)
            })
            ))
        }, [])

	const { getRootProps, getInputProps } = useDropzone({onDrop})

	const selectedFiles = selectedFile?.map(file => (
		<div className="selected_files-container">
			<img src={file.preview} style={{width:'400px', heigth: '400px'}} alt='' />
		</div>
	))






	return( 
	
<>
	<form>{selectedFiles}</form>
		<div {...getRootProps()}>
		<input {...getInputProps()} />

		<div className ='dropzone-container' >
			<p> ARRASTRA TUS ARCHIVOS AQUÍ </p>
			<img
				className ='dropbg-image'
				src = {dropbg} 
				alt = 'background for the dropzone container'/>
				
				<Button
				text= 'subir tus archivos'
				onClick={onDrop}
				/>

		</div>
		</div>
	
</>
	)

}

export default DropZoneComponent
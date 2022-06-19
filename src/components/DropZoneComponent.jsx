import React, { useCallback, useState } from "react"
import "../stylesheets/DropZoneComponent.css"
import dropbg from "../images/dropbg.png"
import Dropzone, {useDropzone} from "react-dropzone"

function DropZoneComponent(){

/* 	const [ selectedFiles, setSelectedFiles] = useState([]);
	const onGrab = useCallback()(acceptedFiles => {
        
		setSelectedFiles(acceptedFiles.map(file => 
            Object.assign(file,{
                preview: URL.createObjectURL(file)
            })
            ));
        }, []); */






	return(
		<div className = 'dropzone-container' >
			<p> ARRASTRA TUS ARCHIVOS AQUÍ </p>
			<img
				className = 'fileBackground-image'
				src = {dropbg} 
				alt = 'background for the dropzone container'/>

		</div>
	)
}

export default DropZoneComponent
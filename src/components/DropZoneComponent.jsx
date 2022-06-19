import "../stylesheets/DropZoneComponent.css"
import dropbg from "../images/dropbg.png"
import React, { useCallback, useState } from "react"
import Dropzone, {useDropzone} from "react-dropzone"

function DropZoneComponent(){
/* 
	const [ selectedFiles, setSelectedFiles] = useState([]);
	
	const onGrab = useCallback()(acceptedFiles => {
		setSelectedFiles(acceptedFiles.map(file => 
            Object.assign(file,{
                preview: URL.createObjectURL(file)
            })
            ));
        }, []);

	const { getRootProps, getInputProps } = useDropzone({onGrab})

	const selected_files = selectedFiles?.map(file => (
		<div>
			<img src={file.preview} style={{width:'100px', heigth: '100px'}} alt='' />
		</div>
	))
 */





	return( 
	
<>
{/* 	<div {...getRootProps()}/>
	<input {...getInputProps()} /> */}
	

		<div className = 'dropzone-container' >
			<p> ARRASTRA TUS ARCHIVOS AQUÍ </p>
			<img
				className = 'fileBackground-image'
				src = {dropbg} 
				alt = 'background for the dropzone container'/>

		</div>
</>
	)

}

export default DropZoneComponent
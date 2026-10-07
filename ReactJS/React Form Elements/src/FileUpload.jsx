import React, { useState } from 'react'

const FileUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileUpload =(e)=> {
        setFile(e.target.file[0]);
    }
  return (
    <div>
        <label>Upload profile image</label>
        <input type="file" onChange={handleFileUpload} />
    </div>
  )
}

export default FileUpload
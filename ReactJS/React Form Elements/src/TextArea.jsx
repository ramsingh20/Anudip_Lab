import React, { useState } from 'react'

const TextArea = () => {
    const [address, setAddress] = useState('');
  return (
    <div>
        <label>Enter Address: </label>
        <textarea value={address} rows='5' cols='30' placeholder='Enter The Address' onChange={(e)=> setAddress(e.target.value)}></textarea>
    </div>
  )
}

export default TextArea
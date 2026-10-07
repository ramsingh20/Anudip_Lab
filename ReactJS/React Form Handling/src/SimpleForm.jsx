import React, { useState } from 'react'

const SimpleForm = () => {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);  // update the state as per the input change
    }

  return (
    <div>
        <h1>SimpleForm</h1>
        <div>
            <label>Enter Your  name </label>
            <input type="text" value={name} onChange={handleChange} />

            <p>You type {name}</p>
        </div>
    </div>
  )
}

export default SimpleForm
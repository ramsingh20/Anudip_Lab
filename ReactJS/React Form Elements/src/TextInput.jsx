import { useState } from "react"

const TextInput = () => {
    const [name, setName] = useState('');

  return (
    <div>
        <h1>Student Registeration Form</h1>
        <label>Enter name: </label>
        <input 
            type="text" 
            value={name} 
            placeholder="type you full name" 
            onChange={(e)=> setName(e.target.value)}
        />
        {/* <p>Type name: {name}</p> */}
    </div>
  )
}

export default TextInput
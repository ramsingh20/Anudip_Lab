import { useState } from "react"

const PasswordInput = () => {
    const [password, setPassword] = useState('');

  return (
    <div>
        <label>Enter password: </label>
        <input 
            type="password" 
            value={password} 
            placeholder="enter password" 
            onChange={(e)=> setPassword(e.target.value)}
        />
        {/* <p>length: {password.length}</p> */}
    </div>
  )
}

export default PasswordInput
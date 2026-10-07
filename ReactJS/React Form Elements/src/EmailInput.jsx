import React, { useState } from 'react'

const EmailInput = () => {
    const [email, setEmail] = useState('');
  return (
    <div>
        <label>Email: </label>

        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
    </div>
  )
}

export default EmailInput
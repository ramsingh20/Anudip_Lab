import { useState } from 'react'

const DOB = () => {
    const [dob, setDob] = useState('');

  return (
    <div>
        <label>Select Birth Date</label>
        <input type="date" value={dob} onChange={(e)=> setDob(e.target.value)}/>
    </div>
  )
}

export default DOB
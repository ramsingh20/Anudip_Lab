import React, { useState } from 'react'

const RadioBtn = () => {
    const [gender, setGender] = useState('');

  return (
    <div>
        <label>Select Gender: </label>
        <label> 
            <input type="radio" value='male' checked={gender === 'male'} onChange={(e)=> setGender(e.target.value)}/> Male
        </label>

        <label>
            <input type="radio" value='female' checked={gender === 'female'} onChange={(e)=> setGender(e.target.value)}/> Female
        </label>

        <label>
            <input type="radio" value='other' checked={gender === 'other'} onChange={(e)=> setGender(e.target.value)}/> Other
        </label>
    </div>
  )
}

export default RadioBtn
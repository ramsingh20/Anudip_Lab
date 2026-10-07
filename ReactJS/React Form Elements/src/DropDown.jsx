import React, { useState } from 'react'

const DropDown = () => {
    const [country, setCountry] = useState('');
  return (
    <div>
        <label>select country:</label>
        <select value={country} onChange={(e)=> setCountry(e.target.value)}>
            <option value="">--select</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Japan">Japan</option>
            <option value="Nepal">Nepal</option>
        </select>
    </div>
  )
}

export default DropDown
import React, { useState } from 'react'

const ControlCheckBox = () => {
    const [ischeck, setIscheck] = useState(false);

  return (
    <div>
        <label>
            <input type="checkbox" checked={ischeck } onChange={(e)=> setIscheck(e.target.check)} />
            Accept Term & Conditions
        </label>


    </div>
  )
}

export default ControlCheckBox
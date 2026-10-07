import { useState } from 'react'

const RangeSlider = () => {
    const [volume, setVolume] = useState(0);
  return (
    <div>
        <label>Volume = {volume}</label>
        <input type="range" min='0' max='100' value={volume} onChange={(e)=> setVolume(e.target.value)} />
    </div>
  )
}

export default RangeSlider 
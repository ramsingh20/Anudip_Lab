import React, { useEffect, useState } from 'react'

// useEffect Hook - 

const UseEffectHook = () => {
    const [count, setCount] = useState(0)
    
    useEffect(()=> {
        console.log("Count Change: ",count);
    }, [count]);

  return (
    <div>
        <h1>Value of Count{count}</h1>
        <button onClick={()=> setCount(count +1)}>Inc Count</button>
    </div>
  )
}

export default UseEffectHook
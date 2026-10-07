import React, { useMemo, useState } from 'react'

// useMemo Hook chaces a calculated value so the react does not need to recalculate on every render 
const UseMemoHook = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(5);

    const square  = useMemo(()=>{
        console.log("Calculating Value");

        return number * number;   
    }, [number]);

  return (
    <div>

        <h1>UseMemoHook</h1>
        <h1>Square = {square}</h1>
        <h1>Count = {count}</h1>
        <button onClick={()=> setNumber(number + 1)}> change number</button>  <br /><br />
        <button onClick={()=> setCount(count +1 )}> Change Count</button>
    </div>
  )
}

export default UseMemoHook
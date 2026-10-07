import React, { useCallback, useState } from 'react'

// UseCallbackHook - UseCallbackHook catch the function
const UseCallbackHook = () => {
    const [count, setCount] = useState(0);

    const sayhello = useCallback(() => {
        console.log("Hello");
    });
    
  return (
    <div>
        <h1>UseCallbackHook</h1>
        <h2> Count: {count}</h2>
        <button onClick={()=> setCount(count +1)}>Increment</button> 
        <button onClick={sayhello}>Say Hello</button> 
    </div>
  )
}

export default UseCallbackHook
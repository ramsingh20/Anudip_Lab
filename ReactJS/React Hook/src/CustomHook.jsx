import React, { useState } from 'react'

// CustomHook is a function you create for using other hook

function useCounter(initialVal = 0) {
    const [count, setCount] = useState(initialVal);

    const Increment = ()=> {
        setCount(count+1);
    };

    const Decrement = () => {
        setCount(count -1);
    };

    return {count, Increment, Decrement};
}

const CustomHook = () => {

    const { count, Increment, Decrement} = useCounter(5);
  return (
    <div>
        <h1>CustomHook</h1>
        <h2>{count}</h2>
        
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default CustomHook
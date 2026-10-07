import React, { useRef } from 'react'

// UseRef - is use to create mutable object that persise acrros render without triggering rerender useRef is access to DOM Elements
const UseRefHook = () => {
    // Initilize useRef with null value
    const InputRef = useRef(null);
    const ClickCountRef = useRef(0); 

    const handleFocus = () => {
        // access DOM Element Directly
        InputRef.current.focus();
    };

    const handleInc = () => {
        // update the mutable value without rerendering
        ClickCountRef.current += 1;
        console.log(`Click ${ClickCountRef.current} times `);
    }
  return (
    <div>
        {/* Attacth Ref to the input element */}
        <h1>useRefHook2</h1>
        <input type="text" ref={InputRef} placeholder='Type here' /> <br /> <br />

        <button onClick={handleFocus}>Focus Input</button>
        <button onClick={handleInc}>Log Click Count</button>

    </div>
  )
}

export default UseRefHook
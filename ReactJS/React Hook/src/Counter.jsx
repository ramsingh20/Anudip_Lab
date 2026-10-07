import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

  return (
    <div>
        <span className='task'>Task 1:</span>
        <h1>Counter Application</h1>
        <span>Count: {count}</span>
        <div className='btn'>
            <div className='btn1'>
                <button onClick={() => setCount(count +1)}>Increment</button>
            </div>
            <div className='btn2'>
                <button onClick={() => setCount(count -1)}>Deccrement</button>
            </div>
        </div>

        <div className="task2">
            <span className='task'>Task 2:</span>
            <h1>Greeting Card</h1>

            <div className="userInput">
                <label>Enter Your name: </label>
                <input type="text" onChange={(e)=> setName(e.target.value)} />
            </div>
            
            <h2 className='greeting'>Hello {name}</h2>
        </div>
    </div>
  )
}

export default Counter
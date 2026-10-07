import React from 'react'
import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('')



  return (
    <div className='app'>
      <h1>Good Morning</h1>
      <p>This is my first React Application</p>
      <button onClick={()=>setCount(count +1)}>Click me {count}</button><br /> <hr />

      <button onClick={() => setMsg('Today we learn React')}>click me to get a message</button>
      <h1>{msg}</h1>
    </div>
  )
}

export default App
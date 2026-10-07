import { useState } from 'react'
import './App.css'
import UseEffectHook from './UseEffectHook'
import UserContextsHook from './UserContextsHook'
import UseMemoHook from './UseMemoHook'
import Counter from './Counter'
import UseRefHook from './UseRefHook'
import UseReducerHook from './UseReducerHook'
import UseCallbackHook from './UseCallbackHook'
import UseIDHook from './UseIDHook'
import CustomHook from './CustomHook'

// useState - useState Hook is manage state in the functional components
// useEffect - useEffect handle Side Effect like data fetching, event call, update call upside react syscronize with external system
function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Ram')

  return (
    <div>
      {/* <h1>value Of Count: {count}</h1>
      <button onClick={()=> setCount(count +1)}>Click</button> */}

      {/* <h1>Name = {name}</h1>
      <button onClick={()=> setName('Akash')}>Change Name</button> */}
{/* 
      <UseEffectHook />
      <UserContextsHook />
      <UseMemoHook /> */}
      {/* <Counter /> */}
      {/* <UseRefHook /> */}
      {/* <UseReducerHook /> */}
      {/* <UseCallbackHook /> */}
      {/* <UseIDHook /> */}
      <CustomHook />
    </div>
  )
}

export default App


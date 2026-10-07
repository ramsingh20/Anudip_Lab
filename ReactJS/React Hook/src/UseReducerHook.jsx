import React, { useReducer } from 'react'

// UseReducer Hook is alternative to useState For manage complex state logic

    function Reducer(state, action) {
        switch(action.type) {
            case "Increment": return { count: state.count +1};
            case "Decrement": return { count: state.count -1}; 
            default: return state 
        }
    }

    const UseReducerHook = () => {
    const [state, dispatch] = useReducer(Reducer, {count: 0});

  return (
    <div>
        <h1>UseReducerHook</h1>
        <h1>{state.count}</h1>
    
        <button onClick={() => dispatch({type: 'Increment'})}>Increment</button>
        <button onClick={() => dispatch({type: 'Decrement'})}>Decrement</button>
    </div>
  )
}

export default UseReducerHook

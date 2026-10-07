import React, { useId } from 'react'

// UseId generate Unique id that is useful for accessibility of element
const UseIDHook = () => {
    const id = useId();

  return (
    <div>
        <h1>UseIDHook</h1>
        <label htmlFor={id}>Name:</label>
        <input id={id} />
    </div>
  )
}

export default UseIDHook
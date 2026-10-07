import React from 'react'

const ReactList = () => {
    const fruits = ["Apple", "Banana", "Orange", "Pineapple"]

  return (
    <div>
        <h1>ReactList</h1>
        <ul>
        {   
            fruits.map((fruit, index)=> (
                <li key={index}>{fruit}</li>
            ))
        }
        </ul>
    </div>
  )
}

export default ReactList
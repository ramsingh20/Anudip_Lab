import React from 'react'

const ReactMap = () => {
    const scores = new Map();
    scores.set("Ram ", 29)
    scores.set("Aman", 23)
    scores.set("Akash", 21)
  return (
    <div>
        <h1>ReactMap</h1>
        <ul>
            {
                [...scores.entries()].map(([name, score]) => (
                    <li key={name}>{name}: {score}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default ReactMap
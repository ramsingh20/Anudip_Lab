const ReactMap = () => {
    const score = new Map()
    score.set('ram', 93)
    score.set('Rahul', 90)
    score.set('Anjali', 85)

  return (
    <div>
        <h1>Student Score</h1>
        <ul>
            {[...score.set('Raju', 88)].map(([name, score])=> (
                <li key={name}> {name} : {score}</li>
            ))}
        </ul>
    </div>
  )
}

export default ReactMap
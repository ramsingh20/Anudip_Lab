import React from 'react'

const ReactList = () => {
    const name = ['Ram', 'Akash', 'Mukhtar', 'Raj'];
    const studentName = [
        {id: 101,name: 'Ram'},
        {id: 102,name: 'Mukhtar'},
        {id: 103,name: 'Mukhtar2'}
    ]

  return (
    <div>
        <ul>
            {name.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
        </ul>

        <ul>
            {studentName.map(student=> (
                <li key={student.id}>{student.id} {student.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default ReactList
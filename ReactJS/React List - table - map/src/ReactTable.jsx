import React from 'react'

const ReactTable = () => {
    const employees = [
        {id: 1, name: "Ram", desginations: "Software Engineer", salary: 40000},
        {id: 2, name: "Akash", desginations: "Frontent Developer", salary: 25000},
        {id: 3, name: "Vijay", desginations: "Backend Developer", salary: 30000},
        {id: 4, name: "Mukhtar", desginations: "ML Engineer", salary: 45000}
    ]
  return (
    <div>
        <h1>ReactTable</h1>
        <h1>Employee Details</h1>
        <table border= '1' cellPadding='10'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>desginations</th>
                    <th>salary</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((emp)=> (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.desginations}</td>
                            <td>{emp.salary}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default ReactTable
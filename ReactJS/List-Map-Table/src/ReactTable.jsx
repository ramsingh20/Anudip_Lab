const ReactTable = () => {
    const Emp = [
        {id: 1, name: 'Ram', designation: 'HR', salary: 29000},
        {id: 2, name: 'Rahul', designation: 'IT', salary: 24000},
        {id: 3, name: 'Raj', designation: 'R&D', salary: 23000},

    ]

  return (
    <div>
        <h1>Employee Table</h1>
        <table border='1' cellPadding='10'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>name</th>
                    <th>Designation</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {Emp.map((Employee)=> (
                    <tr key={Employee.id}>
                        <td>{Employee.id}</td>
                        <td>{Employee.name}</td>
                        <td>{Employee.designation}</td>
                        <td>{Employee.salary}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ReactTable
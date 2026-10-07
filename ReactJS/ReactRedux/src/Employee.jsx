import React, { useState } from 'react'

const Employee = () => {

    const [userSeEmpLega, setUserSeEmpLega] = useState({
        empID: "",
        name: "",
        degi: "",
        salary: ""
    })

    const [employeeTable, setEmployeeTable] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmployeeTable([...employeeTable, userSeEmpLega])

    }

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setUserSeEmpLega({
            ...userSeEmpLega, [name]: value
        })
    }


  return (
    <div>
        <h1>Employee Details</h1>
        <form onSubmit={handleSubmit}>
            <label>Emp Id</label>
            <input type="text" name='empID' value={userSeEmpLega.empID} onChange={handleChange}/> <br />

            <label>name</label>
            <input type="text" name='name' value={userSeEmpLega.name} onChange={handleChange}/> <br />

            <label>degination</label>
            <input type="text" name='degi' value={userSeEmpLega.degi} onChange={handleChange}/> <br />

            <label>salary</label>
            <input type="text" name='salary' value={userSeEmpLega.salary} onChange={handleChange}/> <br />

            <button type='submit'>submit</button>
            <button type='button'>cancel</button>
        </form>

        <table border={1} cellPadding="10">
            <thead>
                <tr>
                    <th>EmpID</th>
                    <th>name</th>
                    <th>salary</th>
                    <th>degination</th>
                </tr>
            </thead>
            <tbody>
                {employeeTable.map((curVal)=> (
                    <tr>
                        <td>{curVal.empID}</td>
                        <td>{curVal.name}</td>
                        <td>{curVal.salary}</td>
                        <td>{curVal.degi}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Employee
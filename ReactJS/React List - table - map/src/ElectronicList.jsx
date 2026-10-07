import React from 'react'

const ElectronicList = () => {
    const ElectronicProduct = ["Laptop", "Mobile", "Mouse", "Keyboard", "Speaker"]
  return (
    <div>
        <h1>ElectronicList</h1>
        <ul>
            {
                ElectronicProduct.map((curval) => (
                    <li>{curval}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default ElectronicList
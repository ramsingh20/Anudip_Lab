import React, { useState } from 'react'

const ProductDetailsTable = () => {
    const [product, setProduct] = useState({
        id: "",
        name: "",
        price: "",
        quantity: ""
    })

    const [productTable, setProductTable] = useState([])

    const handleChange = (e) => {
        const name= e.target.name
        const value= e.target.value
        setProduct(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setProductTable(prev => [...prev, product])

        setProduct({
            id: "",
            name: "",
            price: "",
            quantity: ""
        })
    }

    function cancel() {
       setProduct({
            id: "",
            name: "",
            price: "",
            quantity: ""
        }) 
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Product Details</h1>

                <label>Product id</label>
                <input
                    type="text"
                    name="id"
                    value={product.id}
                    onChange={handleChange}
                /><br />

                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                /><br />

                <label>Price</label>
                <input
                    type="text"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                /><br />

                <label>Quantity</label>
                <input
                    type="text"
                    name="quantity"
                    value={product.quantity}
                    onChange={handleChange}
                />
<br />
                <button type="submit">Submit</button> 
                <button type='button' onClick={cancel}>Cancel</button>
            </form>

            <h1>Product Details Table</h1>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>

                <tbody>
                    {productTable.map((curval) => (
                        <tr>
                            <td>{curval.id}</td>
                            <td>{curval.name}</td>
                            <td>{curval.price}</td>
                            <td>{curval.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductDetailsTable

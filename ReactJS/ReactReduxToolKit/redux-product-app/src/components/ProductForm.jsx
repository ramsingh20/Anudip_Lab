import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addproduct } from '../redux/productsSlice'


const ProductForm = () => {

    const dispatch = useDispatch();
    const [product, setProduct] = useState({
        name: '',
        price: "",
        categories: '',
        quantity: ''
    })
    
     const handleChange = (e) => {
        const {name, value} = e.target;
        setProduct({
            ...product,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!product.name || !product.price || !product.categories || !product.quantity){
            alert("please fill all the fields")
        }
        dispatch(addproduct({
            id: Date.now(),
            name: product.name,
            price: product.price,
            categories: product.categories,
            quantity: product.quantity
        }))

        setProduct({
            name: '',
            price: "",
            categories: '',
            quantity: ''
        })
    }

  return (
    <div>
        <h3>ProductForm</h3>
        <form onSubmit={handleSubmit} className='product-form'>
            <div>
                <label>product name</label>
                <input type="text" name="name" value={product.name}  onChange={handleChange} placeholder='enter the product name' /> <br />
            </div>

            <div>
                <label>product price</label>
                <input type="number" name="price" value={product.price}  onChange={handleChange} placeholder='enter the product price' /> <br />
            </div>

            <div>
                <label>product Categories</label>
                <select name="categories" value={product.categories} onChange={handleChange}>
                    <option value="select">Select</option>
                    <option value="electronic">Laptop</option>
                    <option value="sneekers">Shoes</option>
                    <option value="cloths">shirt</option>
                </select>
            </div>
            <div>
                <label>product quantity</label>
                <input type="text" name="quantity" value={product.quantity}  onChange={handleChange} placeholder='enter the product quantity' /> <br />
            </div>

            <button type='submit'>Add Product</button>
        </form>
    </div>
  )
}

export default ProductForm
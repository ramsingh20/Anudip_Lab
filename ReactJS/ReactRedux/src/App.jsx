import { useState } from 'react'
import './App.css'
import Employee from './Employee';

function App() {

  const [product, setProduct] = useState(
    {
      name: "",
      price: "",
      categories: "",
      quantity: ""
    }
  );

  const [products, setProducts] = useState([])

  // handle the input change
  const handleChange = (e) => {
    const {name, value} = e.target;

    setProduct({
      ...product,
      [name]: value,
    })
  } 

  // handle form  submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // validaation

    if (!product.name || !product.price || !product.quantity || !product.categories) {
     alert("Please Fill all the feilds");
     return;
    }

    // add product details into tables using setProduct method
    setProducts([
      ...products, product
    ])

    // cleaar the forms
    setProduct(
      {
        name: "",
        price: "",
        categories: "",
        quantity: ""
      }
    )

  }


  return (
    // <div>
    //   <h1>Product Details</h1>
    //   {/* Product Form */}
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label>Product name</label>
    //       <input type="text" name='name' value={product.name} onChange={handleChange} placeholder='Enter The Product'/>
    //     </div>
    //     <div>
    //       <label>Price</label>
    //       <input type="number" name='price' value={product.price} onChange={handleChange} placeholder='Enter price'/>
    //     </div>
    //     <div>
    //       <label>categories</label>
    //       <select name="categories" value={product.categories} onChange={handleChange} >
    //         <option value="Cloth">Cloth</option>
    //         <option value="Electronics">Electronics</option>
    //         <option value="Food">Food</option>
    //         <option value="Book">Book</option>
    //       </select>
    //     </div>
    //     <div>
    //       <label>quantity</label>
    //       <input type="number" name='quantity' value={product.quantity} onChange={handleChange} placeholder='Enter quantity'/>
    //     </div>

    //     <button type='submit'>Add Product</button>
    //   </form>

    //   {/* Product Table */}

    //   <h1>Product List</h1>

    //   {product.lenght === 0 ? (<p>No Product Added</p>) : (
    //     <table border={1} cellPadding="10">
    //       <thead>
    //         <tr>
    //           <th>Sr. NO.</th>
    //           <th>Product Name</th>
    //           <th>price</th>
    //           <th>categories</th>
    //           <th>quantity</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {products.map((item, index) => (
    //           <tr key={index}>
    //             <td>{index + 1}</td>
    //             <td>{item.name}</td>
    //             <td>{item.price}</td>
    //             <td>{item.categories }</td>
    //             <td>{item.quantity}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   )}
    // </div>
    <Employee />
  )
}

export default App

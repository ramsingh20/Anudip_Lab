import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import ProductForm from './components/ProductForm'
import { deleteproduct } from './redux/productsSlice'


// we useSelector() to read the data from redux and useDispatch() to delete the data from redux
function App() {
  const products = useSelector((state) => state.products.products)
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteproduct(id))
  }

  return (
    <div>
      <h1>Product Management</h1>
      <ProductForm />
      <h1>Product List</h1>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <table border={1} cellPadding={10}>
          <thead>
            <tr>
              <th>SR. No</th>
              <th>Name</th>
              <th>Price</th>
              <th>Categories</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.categories}</td>
                <td>{product.quantity}</td>
                <td>
                  <button onClick={() => handleDelete(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default App

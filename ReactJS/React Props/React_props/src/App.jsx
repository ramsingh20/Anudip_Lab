import { useState } from 'react';
import './App.css'

// Default PropsD
function Welcome(props) {
  return(
    // <h1>Welcome {props.name}</h1>
    <h1>Welcome {props.name || "Guest"}</h1> // Default Props
  );
}

// Passing Multiple Props
function ProductCard(props) {
  return(
    <div>
      <h1>Product Name: {props.name}</h1>
      <h1>Product Price: {props.price}</h1> <br />
    </div>
  );
}

// Setting Dynamic Attribute To DOM element
function DynamivDiv(props) {
  return (
    <div id={props.id} className={props.className} title={props.title}>
      <p>This is a Dynamic div</p>
    </div>
  )
}

// Pass props to the Form Elements
function InputField(props){
  return(
    <input type="text"  placeholder={props.placeholder} />
  )
}

// Passing Props Dynamically From Array
function Employee(props) {
  return(
    <div>
      <h1>Emplyee Id: {props.id}</h1>
      <h1>Emplyee name: {props.name}</h1>
      <h1>Emplyee Dept: {props.dept}</h1> <br />
    </div>
  )
}

// Destructuring Props
function User({Username, Email}) {
  return (
    <div>
      <h1>Username: {Username}</h1>
      <h1>Email: {Email}</h1><br />
    </div>
  )
}

// ternary operator with props
function LoginCheck(props) {
  return (
    <div>
      <h1>{props.isLogin ? `welcome ${props.name}`  : "please Login"}</h1>
    </div>
  )
}

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const Employees = [
    {id: 1, name: 'Ram', dept: 'HR'},
    {id: 2, name: 'Akash', dept: 'IT'},
    {id: 3, name: 'Mukhtar', dept: 'sales'},
  ];

  return (
    <div>
      {/* <Welcome name='Ram' /> */}
      <Welcome  />
      <ProductCard name='Laptop' price={99999} />
      <ProductCard name='Phone' price={20000} />
      <ProductCard name='DJ' price={299} />
      <DynamivDiv id='mainDiv' className='dynamic' title='Clickme' />
      Enter Username: 
      <InputField value='React Props' placeholder='Enter the username' />
      <div>
        {Employees.map((employee)=>{
          return <Employee id={employee.id} name={employee.name} dept={employee.dept} /> 
        })}
      </div>
      <User Username='Ram' Email='ram!@gmail.com'  />
      <User Username='Mukhtar' Email='mukhtar!@gmail.com'  />
      <div>
        <LoginCheck isLogin={isLogin} name='mukhtar' />
        <button onClick={()=> setIsLogin(!isLogin)}> {isLogin ? 'Logout' : 'Login'}</button>
      </div>
    </div>
  )
}

export default App

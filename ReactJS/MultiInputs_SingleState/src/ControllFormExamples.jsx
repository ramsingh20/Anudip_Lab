import { useRef, useState } from "react"

const ControllFormExamples = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        age: ""
    });
    const NameRef = useRef(null);
    const emailRef = useRef(null);
    const AgeRef = useRef(null);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value,});
    }

    const handleSubmit = () => {
        alert(`Name: ${NameRef.current.value}, Email: ${emailRef.current.value}, Age: ${AgeRef.current.value}`)
    }

  return (
    <div>
        <form>
            <label>Username: </label>
            <input type="text" ref={NameRef} name="username" value={formData.username} onChange={handleChange} /><br />

            <label>Email: </label>
            <input type="email" ref={emailRef} name="email" value={formData.email} onChange={handleChange} /><br />

            <label>Age: </label>
            <input type="text" ref={AgeRef} name="age" value={formData.age} onChange={handleChange} /><br />

            <button onClick={handleSubmit}>Submit</button>
        </form>
        
        {/* <h1>Form Data</h1>
        <p>username: {formData.username}</p>
        <p>email: {formData.email}</p>
        <p>age: {formData.age}</p> */}
    </div>
  )
}

export default ControllFormExamples

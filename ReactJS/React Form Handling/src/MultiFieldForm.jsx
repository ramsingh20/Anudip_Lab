import { useState } from 'react'

export const MultiFeildForm = () => {

    const [toggle1, setToggle1] = useState(false)
    const [toggle2, setToggle2] = useState(false)

    const [formData, setFormData] = useState({
        username: false,
        password: false
    });
    
    const handleChange1 = (event) => {
        setFormData({
            ...formData,  // return existiong value 
            [event.target.name]: event.target.value  // update change field
        });
        setToggle1(true)
    };
    
    const handleChange2 = (event) => {
        setFormData({
            ...formData,  // return existiong value 
            [event.target.name]: event.target.value  // update change field
        });
        setToggle2(true)
    };

    const [showHint, setShowHint] = useState(false);
    // function showHintOnFocus() {
    // }

  return (
    <div>
        <h1>MultiFeildForm</h1>
        <form>
            <label> Username: </ label>
            <input type="text" name='username' value={formData.username || ''} onChange={handleChange1} /> <br />
            <br />
            <label>Password: </label>
            <input type="password" name='password' value={formData.password || ''} onChange={handleChange2} onFocus={()=> setShowHint(true)} onBlur={() =>setShowHint(false)} style={{border: '3px solid gray'}}  /> 
            {showHint && <p style={{color: "red", fontSize: "10px"}}>use atlest 8 character</p>}
             <br /><hr />

            {toggle1 && <p>username: {formData.username}</p>}
            {toggle2 && <p>password: {formData.password}</p>}
        </form>
    </div>
  )
}
 
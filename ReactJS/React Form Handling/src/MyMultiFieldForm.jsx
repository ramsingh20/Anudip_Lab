import { useState } from 'react'

export const MyMultiFeildForm = () => {
    const [toggle1, setToggle1] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    
    const [showHint, setShowHint] = useState(false)

    const handleChange1 = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
        setToggle1(true)
    }

    const handleChange2 = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
        setToggle2(true)

        if (event.target.value.length < 8) {
            setShowHint(true)
        } else {
            setShowHint(false)
        }
    }

    function handleFocus() {
        // Show hint when password has less than 8 characters
        if (formData.password.length < 8) {
            setShowHint(true)
        }
    }

    return (
        <div>
            <h1>MultiFieldForm</h1>
            <form>
                <label>Username: </label>
                <input type="text" name="username" value={formData.username} onChange={handleChange1} />
                <br /><br />

                <label>Password: </label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange2}
                    onFocus={handleFocus}
                    onBlur={() => setShowHint(false)}
                />

                {showHint && (
                    <p style={{ color: "red", fontSize: "10px" }}>use at least 8 characters</p>
                )}

                <br />
                <hr />

                {toggle1 && <p>username: {formData.username}</p>}
                {toggle2 && <p>password: {formData.password}</p>}
            </form>
        </div>
    )
}

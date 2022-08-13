import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Signup = ({ setUser }) => {
    const defaultFormData = {
        username: '',
        password: ''
    }
    let navigate = useNavigate()

    const [formData, setFormData] = useState(defaultFormData)

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(data => {
                setFormData(defaultFormData)
                setUser(data)
                navigate('/')
            })
    }

    return (
        <div className="content-wrapper">
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Create an Account</h2>
                </div>
                <label>
                    Username
                <input
                        type='text'
                        name='username'
                        value={formData.username}
                        onChange={handleFormChange}
                    />
                </label>
                <label>
                    Password
                <input
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={handleFormChange}
                    />
                </label>
                <input type='submit' value='Submit' />
            </form>

        </div>
    )
}
export default Signup

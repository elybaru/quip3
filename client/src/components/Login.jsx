import React, { useState, useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { UserContext } from './UserContext';

const Login = () => {
    const {user, setUser} = useContext(UserContext)


    
    const defaultFormData = {
        username: '',
        password: ''
    }

    const [formData, setFormData] = useState(defaultFormData)

    const navigate = useNavigate();

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(data => {
                setFormData(defaultFormData)
                if (data.id) {
                    setUser(data)
                    navigate(`/home`)
                }

            })

    }
    return (
        <div className="content-wrapper">
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Login</h2>
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

export default Login
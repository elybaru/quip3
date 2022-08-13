import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ({ user }) => {
    console.log(user)
    return (
        <div>
            I am the Navbar.
        <div>
                Hello, {user.username}.
                <div>
                <Link to='/home'>Home</Link>
                <Link to='/conversations'>Conversations</Link>
                </div>
            </div >
        </div >
    )
}

export default Navbar
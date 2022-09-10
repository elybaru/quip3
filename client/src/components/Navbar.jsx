import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from './UserContext';

const Navbar = () => {
    const {user, setUser} = useContext(UserContext)
   
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
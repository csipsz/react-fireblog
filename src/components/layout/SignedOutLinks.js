import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/">Sign Up</NavLink></li>
            <li><NavLink to="/"></NavLink>Log In</li>
        </ul>
    )
}

export default SignedOutLinks

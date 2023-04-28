import React from 'react'
import {Link, NavLink} from'react-router-dom'

const Navbar = () => {
  return (
<nav className='navbar'>
    <Link to={"/"}><h1>Protected Router</h1></Link>
    <ul>
        <li><NavLink to={"/admin"}>Admin</NavLink></li>
        <li><NavLink to={"/Login"}>Login</NavLink></li>

    </ul>
</nav>
  )
}

export default Navbar
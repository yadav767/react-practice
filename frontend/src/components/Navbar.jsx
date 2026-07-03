import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-center gap-x-5 mb-15'>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/products" >Products</NavLink>
        <NavLink to="/login" >Login</NavLink>
    </div>
  )
}

export default Navbar
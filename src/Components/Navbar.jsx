import React from 'react'
import './Navbar.css'
import { BiLogoJoomla } from "react-icons/bi";
import { Button } from "antd";


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo text-4xl'><BiLogoJoomla/>Nexcent</div>
        <ul className='nav-links'>
            <li>Home</li>
            <li>Service</li>
            <li>Feature</li>
            <li>Product</li>
            <li>Testimonial</li>
            <li>FAQ</li>
        </ul>
        <div className='loginsignup'>
        <Button className='login' type="text">Login</Button>
        <Button className='signup' type="primary">Sign Up</Button>
        </div>
    </div>
  )
}

export default Navbar
import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='container'>
        <div className="navbar">
            <div className='logo'>
                <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p>house</p>
            </div>

            <div className='navbar-list'>
                    <p>Features</p>
                    <p>About</p>
                    <p>Solutions</p>                   
                    <p>Pricing</p>
                    <p>Contact Us</p>
            </div>

            <div className='login-btn'>
                <p className='btn'>Login</p>
            </div>
        </div>
    </div>
  );
};

export default Navbar;



import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar1">
        <div className="nav-container">

            <div className="menu1">
                <i className="fa-solid fa-bars"></i>
            </div>
            <Link to="/"><img src="logo-udemy.svg" alt="udemy logo" className="logo" /></Link>
            <div className="dropdown nav-media">
               <Link to="/categories" className="dropdownbtn hoverbutt ">Categories</Link>
            </div>
            <div class="search nav-media">
                <form action="" className="search-form">
                <button type="submit" className="search-icon"><i className="fa-solid fa-magnifying-glass"></i></button>
                    <input type="text" className="search-input" placeholder="Search for anything" />
                    
                </form>
            </div>
            <div >
                <Link to="/udemy-business" className="business hoverbutt">udemy business</Link>
            </div>
            <div >
                <Link to="/teach-on-udemy" className="teach hoverbutt">Teach on Udemy</Link>
            </div>
            <div className="shopping-icon hoverbutt nav-media">
                <Link to="cart" className="shopping-icon hoverbutt"><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
            <Link to="/login" className="login btn-1 btnhover nav-media"><span>Login</span></Link>
            <Link to="/sign-up" className="signup btn-1 nav-media"><span>Sign up</span></Link>
            <Link to="/" href="#" class="lang btn-1 btnhover nav-media"><i className="fa-solid fa-globe"></i></Link>
        </div>
    </nav>
  )
}

export default Navbar
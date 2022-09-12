import React from 'react';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const [searchParams, setSearchParams] = useSearchParams("");
    const [searchvalue,setSearchvalue]=useState("");
    const navigate = useNavigate();
    function searchaction(event){
        event.preventDefault();
        setSearchParams({
            searchvalue:searchvalue
        });
        let para="/?searchvalue="+searchvalue
        navigate(para)
    }
  return (
    <nav className="navbar1">
        <div className="nav-container">

            <div className="menu1">
                <i className="fa-solid fa-bars"></i>
            </div>
            <Link to="/"><img src="/logo-udemy.svg" alt="udemy logo" className="logo" /></Link>
            <div className="dropdown nav-media">
               <Link to="/categories" className="dropdownbtn hoverbutt ">Categories</Link>
            </div>
            <div className="search nav-media">
                <form action="/" className="search-form"  onSubmit={searchaction}>
                <button type="submit" className="search-icon" ><i className="fa-solid fa-magnifying-glass"></i></button>
                    <input type="text" value={searchvalue}
                    onChange={(e) => setSearchvalue(e.target.value)}
                    className="search-input" placeholder="Search for anything" />
                    
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
            <Link to="/" href="#" className="lang btn-1 btnhover nav-media"><i className="fa-solid fa-globe"></i></Link>
        </div>
    </nav>
  )
}

export default Navbar
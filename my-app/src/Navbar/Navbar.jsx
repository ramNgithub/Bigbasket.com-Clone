import React from 'react'
import "./Navbar.css"
import { useAuth0, User } from "@auth0/auth0-react";
import { useEffect } from 'react';

const Navbar = () => {
const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();
  return (
    <div className='Navbar'>
        <div className='logo-select'>
            <img className='website_logo'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ9mFXQTkux4Umg_fRUf1sYsuhdsrxw3Nj0g&usqp=CAU" alt="Not-Found" />
            <ul className="nav-links">

<li>
    <a href="#" className="desktop-item">Mega Menu</a>
    
    <div className="mega-box">
      <div className="content">
        
        <div className="row">
          <header>Design Services</header>
          <ul className="mega-links">
            <li><a href="#">Graphics</a></li>
            <li><a href="#">Vectors</a></li>
            <li><a href="#">Business cards</a></li>
            <li><a href="#">Custom logo</a></li>
          </ul>
        </div>
        <div className="row">
          <header>Email Services</header>
          <ul className="mega-links">
            <li><a href="#">Personal Email</a></li>
            <li><a href="#">Business Email</a></li>
            <li><a href="#">Mobile Email</a></li>
            <li><a href="#">Web Marketing</a></li>
          </ul>
        </div>
        <div className="row">
          <header>Security services</header>
          <ul className="mega-links">
            <li><a href="#">Site Seal</a></li>
            <li><a href="#">VPS Hosting</a></li>
            <li><a href="#">Privacy Seal</a></li>
            <li><a href="#">Website design</a></li>
          </ul>
        </div>
      </div>
    </div>
  </li>
</ul>
        </div>
        <div className='search-offer'>
            <input className='search-input' placeholder='Search products'/>
            <img width="27px" style={{marginBottom:"-10px",marginLeft:"-30px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlEO3Cu7FDawaKrxHFHUJgDOwOaigjIGMMoA&usqp=CAU" alt="Not-Found" />
            <button className='offer_tag'>OFFERS</button>
        </div>
        <div className='login-signup-addcart'>
            <div style={{display:"flex"}}>
              { isAuthenticated && <p>{user.name}</p> }  
            
            {
                isAuthenticated ? <button onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
              </button>
              : 
              <button onClick={() => loginWithRedirect()}>Log In</button>
              
            }

            
            
            </div>
            <div>
            <img width="50px"style={{marginRight:'140px',marginTop:"20px"}} src="https://www.kindpng.com/picc/m/458-4587840_red-shopping-basket-icon-hd-png-download.png" alt="Not-Found" />
            </div>
        </div>
       
        
    </div>
  )
}

export default Navbar
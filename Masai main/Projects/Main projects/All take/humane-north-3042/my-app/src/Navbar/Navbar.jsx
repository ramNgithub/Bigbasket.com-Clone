import React from 'react'
import "./Navbar.css"
import {useAuth0} from "@auth0/auth0-react"



const Navbar = ({ setShow, size }) => {

  const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();




  return (
    <div className='Navbar'>
        <div className='logo-select'>
            <img onClick={() => setShow(true)} className='website_logo'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ9mFXQTkux4Umg_fRUf1sYsuhdsrxw3Nj0g&usqp=CAU" alt="Not-Found" />
            <ul className="nav-links">

<li>
    <a href="#" className="desktop-item">SHOP BY CATEGORY</a>
    
    <div className="mega-box">
      <div className="content">
        
        <div className="row">
          
          <ul className="mega-links">
            <li><a href="#">Fruits and vegitables</a></li>
            <li><a href="#">Beverage</a></li>
            <li><a href="#">Baby Care</a></li>
            <li><a href="#">Beauty & Hygenic</a></li>
          </ul>
        </div>
        <div className="row">
          
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
            <img  width="27px" style={{marginBottom:"-10px",marginLeft:"-30px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlEO3Cu7FDawaKrxHFHUJgDOwOaigjIGMMoA&usqp=CAU" alt="Not-Found" />
            <button className='offer_tag'>OFFERS</button>
        </div>
        
        <h4 className='email'>{ isAuthenticated && <p style={{marginTop:"60px",marginLeft:"-50px"}}>{user.name}</p> } </h4>
        <div className='login-signup-addcart'>
            <div style={{display:"flex"}}>
               
            

            {
                isAuthenticated ? <button className='Log-btn' onClick={() => logout({ returnTo: window.location.origin })}>
                Logout
              </button>
              : 
              <button className='Log-btn' onClick={() => loginWithRedirect()}>Login</button>
              
            }

            
            
            </div>
            <div className='ddddd'>
            <img className='Cart-logo' onClick={() => setShow(false)}  width="30px" style={{marginRight:'140px',marginTop:"40px"}} src="https://www.kindpng.com/picc/m/458-4587840_red-shopping-basket-icon-hd-png-download.png" alt="Not-Found" />
            <h4 style={{marginTop:"-27px"}}>{size}</h4>
            </div>
           
        </div>
       
        
    </div>
  )
}

export default Navbar
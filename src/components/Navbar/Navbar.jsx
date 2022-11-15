import React from 'react'
import styled from "./navbar.module.css"
import { Link,NavLink} from "react-router-dom";
import {useAuth} from "../Context/Auth"
export default function Navbar() {

const auth = useAuth();

  const navBarStyles=({ isActive })=>{
    return{


      color: isActive ? '#fff' : '#1ABC9C',
      background: isActive ? '#1ABC9C' : 'transparent',
      borderRadius:isActive ? '15px' : '',
      border:isActive ? '2px solid #fff' : ''
    }


  }
  return (
    <div>
    <nav className={`${styled.navBar} navbar navbar-expand-lg navbar-dark w-100 fixed-top `}>
    <div className="container">
      <Link className={`${styled.navBar_Brand} navbar-brand `} to="">START REACT</Link>
      <button className={` navbar-toggler `} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span>menu</span><span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
        <li className={`nav-item`}>
          <NavLink  className={`${styled.nav_link} nav-link `} 
          aria-current="page"     style={navBarStyles} to="">HOME</NavLink>
        </li>
       
        {(auth.email && auth.password) && (
        <li className="nav-item">
           <NavLink className= {`${styled.nav_link} nav-link`}   
           
           style={navBarStyles} 
           
           to="portofolio">PORTOFOLIO</NavLink>
        </li>
        )}
       
        <li className="nav-item">
           <NavLink className={`${styled.nav_link} nav-link`}    
           
           style={navBarStyles} 
           
           to="about">ABOUT</NavLink>
        </li>

        {(auth.email && auth.password) && (
        <li className="nav-item">
        <NavLink className={`${styled.nav_link} nav-link`}  
        
        style={navBarStyles} 
        
        to="recipes">RECIPES</NavLink>
     </li>
     )}
  {(auth.email && auth.password) && (
        <li className="nav-item">
           <NavLink className={`${styled.nav_link} nav-link`}  
           
           style={navBarStyles} 
           
           to="contact">CONTACTS</NavLink>
        </li>
        )}
        
        <li className="nav-item">
        <NavLink className={`${styled.nav_link} nav-link`}  
        
        style={navBarStyles} 
        
        to="profile">PROFILE</NavLink>
     </li>

   

     {(!auth.email && !auth.password) && (

     <li className="nav-item">
     <NavLink className={`${styled.nav_link} nav-link`}  
     
     style={navBarStyles} 
     
     to="login">LOGIN_PAGE</NavLink>
  </li>


     )}


        </ul>
 
      </div>
    </div>
  </nav>
    </div>
  )
}

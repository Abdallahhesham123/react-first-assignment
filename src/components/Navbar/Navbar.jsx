import React from 'react'
import styled from "./navbar.module.css"
import { Link,NavLink} from "react-router-dom";
export default function Navbar() {

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
          aria-current="page"     style={({ isActive }) => ({
            color: isActive ? '#fff' : '#1ABC9C',
            background: isActive ? '#1ABC9C' : 'transparent',
            borderRadius:isActive ? '15px' : '',
            border:isActive ? '2px solid #fff' : ''
          })} to="">HOME</NavLink>
        </li>
        <li className="nav-item">
           <NavLink className= {`${styled.nav_link} nav-link`}   
           
           style={({ isActive }) => ({
            color: isActive ? '#fff' : '#1ABC9C',
            background: isActive ? '#1ABC9C' : 'transparent',
            borderRadius:isActive ? '15px' : '',
            border:isActive ? '2px solid #fff' : ''
          })} 
           
           to="portofolio">PORTOFOLIO</NavLink>
        </li>
        <li className="nav-item">
           <NavLink className={`${styled.nav_link} nav-link`}    
           
           style={({ isActive }) => ({
            color: isActive ? '#fff' : '#1ABC9C',
            background: isActive ? '#1ABC9C' : 'transparent',
            borderRadius:isActive ? '15px' : '',
            border:isActive ? '2px solid #fff' : ''
          })} 
           
           to="about">ABOUT</NavLink>
        </li>

        <li className="nav-item">
        <NavLink className={`${styled.nav_link} nav-link`}  
        
        style={({ isActive }) => ({
         color: isActive ? '#fff' : '#1ABC9C',
         background: isActive ? '#1ABC9C' : 'transparent',
         borderRadius:isActive ? '15px' : '',
         border:isActive ? '2px solid #fff' : ''
       })} 
        
        to="recipes">RECIPES</NavLink>
     </li>

        <li className="nav-item">
           <NavLink className={`${styled.nav_link} nav-link`}  
           
           style={({ isActive }) => ({
            color: isActive ? '#fff' : '#1ABC9C',
            background: isActive ? '#1ABC9C' : 'transparent',
            borderRadius:isActive ? '15px' : '',
            border:isActive ? '2px solid #fff' : ''
          })} 
           
           to="contact">CONTACTS</NavLink>
        </li>
 
   
        </ul>
 
      </div>
    </div>
  </nav>
    </div>
  )
}

import React from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Outlet } from "react-router-dom";
import ContactInfo from '../ContactInfo/ContactInfo';

export default function Layout() {
  return (
    <div>
    <Navbar/>
    <div className="App center-flex">
   <Outlet/>
    </div>
    <ContactInfo/>
        <Footer/>
    </div>
  )
}

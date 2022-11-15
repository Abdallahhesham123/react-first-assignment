import React from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Outlet } from "react-router-dom";
import ContactInfo from '../ContactInfo/ContactInfo';
import { ContextProvider } from '../Context/Auth';

export default function Layout() {
  return (
    <div>
    <ContextProvider>
    <Navbar/>
    <div className="App center-flex">
   <Outlet/>
    </div>
    <ContactInfo/>
        <Footer/>
    
    </ContextProvider>

    </div>
  )
}

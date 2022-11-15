import React from 'react'
import profileStyle from "./profile.module.css"
import {useAuth} from "../Context/Auth"
import{useNavigate} from "react-router-dom"
const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  let handleLogout = ()=>{
    auth.logout();
    navigate("/",{replace:true})

  }
  return (
    <div className='container py-5'>
    <div className="row py-5 justify-content-center align-items-center vh-100">
    <h1 className={`${profileStyle.text}`}>    Profile Page Welcome <span className={`${profileStyle.email}`}>{auth.email}</span></h1>
    <button className={`btn btn-outline-danger w-25`} onClick={()=>handleLogout()}>Logout</button>
    </div>
    </div>
  )
}

export default Profile
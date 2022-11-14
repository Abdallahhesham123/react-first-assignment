import React from 'react'
import styled from "./about.modul.css"
import Icon from '../Icon/Icon'

export default function About() {
  let color="#fff";
  let fontSize ="2rem"

  return (
<>

<div className={`container-fluid pt-5` } style={{backgroundColor:"#1ABC9C"}}>
<div className= {` row justify-content-center align-items-center vh-100 gx-2`}>
<div className="col-md-12 m-0 p-0">
<div className={`${styled.about_head}`}>
<h2 style={{color:"#fff",fontSize:"6rem"}}>ABOUT</h2>
<Icon color= {color} fontSize={fontSize}/>
</div>
</div>

<div className="col-md-4 m-0 p-0">

<p style={{fontSize:"20px",color:"#fff",width:"90%"}}>Freelancer is a free bootstrap theme created 
by Route. The download includes the complete source 
files including HTML, CSS, and JavaScript as well as 
optional SASS stylesheets for easy customization.</p>

</div>
<div className="col-md-4 m-0 p-0">

<p style={{fontSize:"20px",color:"#fff",width:"90%"}}>Freelancer is a free bootstrap theme created 
by Route. The download includes the complete source 
files including HTML, CSS, and JavaScript as well as 
optional SASS stylesheets for easy customization.</p>


</div>



</div>

</div>
</>
)
}

import React from 'react'
import style from "./icon.module.css"
export default function Icon({color ,fontSize}) {
  return (
    <div className={`${style.icon}`}>
    <div className={`${style.line_icon1}`} style={{"--color":color ,"--font":fontSize}}></div>
    <div className={`${style.font_icon}`}>
    <i  
    className={`${style.icon_color} fa-solid fa-star`} 
    style={{"--color":color ,"--font":fontSize}}></i>
    </div>
    <div className={`${style.line_icon2}`} style={{"--color":color ,"--font":fontSize}}></div>
  </div>
  )
}

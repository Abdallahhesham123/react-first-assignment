import React from 'react'
import styled from"./footer.module.css"
export default function Footer() {
  return (
    <div>
            <section className={`${styled.credit} `}>
            Copyright © <span style={{color:"#f44336" ,fontWeight:"700"}}>Abdallah Hesham</span>  Website 2022
            </section>
    </div>
  )
}

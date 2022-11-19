import React from 'react'
import Icon from '../Icon/Icon'
import styled from './home.module.css'
// import fontawesome from '@fortawesome/fontawesome'
// import FontAwesomeIcon from '@fortawesome/fontawesome-free/css/all.min.css';
export default function Home() {


        let color="#fff";
        let fontSize ="2em"

  return (

    
  <div className={`${styled.home}`} >
      <div className={`${styled.header_cap}`}>

                    <img src="./images/avataaars.svg" alt=""  className='w-25 '/>
                    <h1 className='text-danger'>START REACT</h1>
                           <Icon color= {color} fontSize={fontSize}/>
                    <p className='text-danger'>Graphic Artist - Web Designer - Illustrator</p>

      </div>
  
  </div>

  )
}

import React from 'react'
import styled from "./porto.module.css"
export default function PortofolioImage({show,imageIndex,imageInfo}) {
  return (
    <>
    <div className={`col-md-4`}>
    <div className={`${styled.img_container}`}>
      <img src={imageInfo.image} alt="" className="w-100" />

      <div className={`${styled.img_container_cap} `} onClick={()=> show(imageIndex,imageInfo.title)}>
        <i className="fa-solid fa-plus"></i>
      </div>
    </div>
  </div>
    </>
  )
}

import React, { useEffect, useState } from 'react'
import styles from "./recipes.module.css"
import  axios  from 'axios'
export default function Recipes() {
    const [recipes, setrecipes] = useState([])
                        let getProduct=async()=>{
                        let{data}= await axios.get("https://forkify-api.herokuapp.com/api/search?q=pizza");
                        console.log(data)
                        setrecipes(data.recipes) 

                        }

                        useEffect(() => {
                         
                            getProduct();
                        }, [])

  return (
    <div className={`${styles.section} `}>
    <div className={`${styles.container} `}>
    <h1 >Hello In Recipes</h1>
    <div className={`${styles.row}  `}>
   
    {recipes.length > 0 ?  recipes.map((res,index)=>{
        return(
        <div className={`${styles.item}`} key={index}>
            <div className={`${styles.item_inner}`}>
                <div className={`${styles.img_box}`}>
               
                    <img src={res.image_url} alt="img-1"/>
                    <img src={res.image_url} alt="img-1"/>
                    <img src={res.image_url} alt="img-1"/>
                    <img src={res.image_url} alt="img-1"/>
                 
                    <img src={res.image_url} className={`${styles.visibility_hidden}`} alt="img-1"/>
                </div>
                <div className={`${styles.info_box}`}>
                    <h1>{res.publisher}</h1>
                    <p>{res.title}</p>
                    <div className={`${styles.social_links}`}>
                        <a href="/#"><i className="fab fa-facebook-f"></i></a>
                        <a href="/#"><i className="fab fa-twitter"></i></a>
                        <a href="/#"><i className="fab fa-instagram"></i></a>
                        <a href="/#"><i className="fab fa-google-plus-g"></i></a>
                    </div>
                </div>
            </div>
        </div>
        )
    }):
    <div className="container">
    <div className='row justify-content-center align-items-center vh-100'>
    <i className='fa fa-spinner fa-5x'></i>
    </div>
    </div>
}
        </div>
        </div>
    </div>
  )
}

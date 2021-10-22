import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

//CSS Imports 
import "../css/Categories.css"
import {getCategory } from './getCategories'
const Categories = () => {
    const [category,setCategory]=useState([]);
   
    useEffect(() => {
        const getDetails=async()=>{
            setCategory(await getCategory("Bearer BQDDbXM_91SPhfatAy9Q2j-CmoRxi39lzgzTnHZ2Aw_rdsyXMM4Gwv8GhKGTxWnRb-aFAn58SZvkPHma7_3WcOeBGRIg2V9wDIMIuWObKQikQrP3z0V9Nj40WSuhFtUIXFeGl94mpmx2l8jYFzZra8LYt6vwIAQ"));
        }
        getDetails()
    }, [])
    return (
        <div className="categories">
            <div className="cat-titles">
                    <h1>Categories</h1>
            </div>
            <div className="back-cover">
                {
                    category.slice(0,20).map((data,index)=>(
                        <Link style={{textDecoration: "none"}}to={`category/${data.id}`}>
                        <div className="card">
                            <div className="card-inner">
                                <div className="card-image">
                                {
                                    data.icons.map(icon=>(
                                        <img src={icon.url}></img>
                                    ))
                                }
                                    
                                </div>
                                <div className="card-desc">
                                        <h4>{data.name}</h4>
                                        <p>Genre</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    ))
                }

                
            </div>
            
        </div>
    )
}

export default Categories

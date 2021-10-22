import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
//CSS Imports 
import "../css/Categories.css"
import { getPlayListByCategory } from './getPlayListByCategory';
const Playlist = () => {
    const {name}=useParams()
    const [play,setPlaylist]=useState([]);
   
    function truncate(str)
    {
        return str.length>10?str.substring(0,15)+"...":str;
    }
    useEffect(() => {
        const getDetails=async()=>{
            setPlaylist(await getPlayListByCategory("Bearer BQDDbXM_91SPhfatAy9Q2j-CmoRxi39lzgzTnHZ2Aw_rdsyXMM4Gwv8GhKGTxWnRb-aFAn58SZvkPHma7_3WcOeBGRIg2V9wDIMIuWObKQikQrP3z0V9Nj40WSuhFtUIXFeGl94mpmx2l8jYFzZra8LYt6vwIAQ",name));
        }
        getDetails()
    }, [])
    console.log(play)
    return (
        <div className="categories">
            <div className="cat-titles">
                    <h1>PlayList</h1>
            </div>
            <div className="back-cover">
            {
                play.slice(0,20).map((data,index)=>(
                    <div className="card">
                        <div className="card-inner">
                            <div className="card-image">
                            {
                                data.images.map(image=>(
                                    <img src={image.url}></img>
                                ))
                            }
                                
                            </div>
                            <div className="card-desc">
                                    <h4>{truncate(data.name)}</h4>
                                    <p>{truncate(data.description)}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
            
        </div>
    )
}

export default Playlist

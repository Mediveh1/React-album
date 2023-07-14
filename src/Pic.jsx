import { render } from "react-dom";
import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import "./index.css"

export default function Pic (){
    const something=useLocation()
    const s = something.pathname.split('/');
    const id = s[s.length - 1];

    const [img, setImg] = useState("")
    
   

    
    useEffect(() => {
        const fetchedData = async () => {
            const response = await fetch(
              `https://picsum.photos/id/${id}/info`
            );
            const response1= await response.json()


       
            setImg(response1);
            console.log(response1)
        
            
            
            
            
          };
          fetchedData();
    }, [id])
   
    return (
        <div>
           <h1 className="title">React Album</h1>
          
          <div className="wrapper">
         
          {
            img && <img className="selected-image" src={img.download_url}/>
          }
         
          <hr></hr>
       
          <div className="author">
            <div>Author</div>
          {
            img && <div>{img.author}</div>
          }

          </div>

          </div>
     
          
   
          
          
        </div>
    )
}
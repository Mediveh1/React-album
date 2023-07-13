import { render } from "react-dom";
import React, { useEffect, useState } from "react";
import Album from "./Album";
import { useLocation } from "react-router-dom";

export default function Pic (){
    const something=useLocation()
    const s = something.pathname.split('/');
    const id = s[s.length - 1];
    const [img, setImg] = useState("")

    
    useEffect(() => {
        const fetchedData = async () => {
            const response = await fetch(
              `https://picsum.photos/id/${id}/500/600`
            );
            console.log(response)
            setImg(response.url);
          };
          fetchedData();
    }, [id])
    
    return (
        <div>
          <div>{something.state.props}</div>
          {
            img && <img src={img}/>
          }
        </div>
    )
}
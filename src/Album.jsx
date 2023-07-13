import React, { useEffect, useState } from "react";
import { Link , useNavigate} from "react-router-dom";


import Masonry from "react-responsive-masonry";

function Album() {
  const navigate=useNavigate()
  const [pics, setPics] = useState([]);
  const [pages, setPages] = useState(0);
  useEffect(() => {
    const fetchedData = async () => {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${pages}&limit=10`
      );
      const data = await response.json();
      setPics((prev) => [...prev, ...data]);
      
    };
    fetchedData();
  }, [pages]);
  return (
    <div>
      <h2 className="mt-3 mb-4 text-center">React Photo Album </h2>
      <Masonry gutter="15px" spacing={{ spacing: "10px" }}>
        {pics.map((image) => (
          <div>
          
            <img
              className="masonry-image"
              id={image.id}
              src={image.download_url}
              style={{ width: "100%" }}
              onClick={()=>{navigate(`/Pic/${image.id}` , {state:{pics}})}}  
            /> 
          </div>
        ))}
      </Masonry>
      <button type="button" onClick={() => setPages((prev) => prev + 1)}>
        Load more
      </button>
    </div>
  );
}

export default Album;

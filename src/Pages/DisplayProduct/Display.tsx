import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Display = () => {
    const {id}=useParams()
    console.log (id)
    const [viewResult, setViewResult] = useState <any>({});
    console.log(viewResult);

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const { data } = await axios.get(
              `https://fullstack-student-backend.onrender.com/api/auth/${id}`
            );
            console.log(data);
    
            setViewResult(data);
          } catch (error) {
            console.error("Result not Found:", error);
          }
        };
    
        fetchPosts();
      }, []);

  return (
    <div>
        <h1>Product Display Screen</h1>       
        <h1>{viewResult?.firstName}</h1>
        <h1>{viewResult?.lastName}</h1>
        <h1>{viewResult?.phoneNumber}</h1>
    </div>
  )
}

export default Display
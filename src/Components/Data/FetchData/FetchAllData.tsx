// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useNavigate, useNavigation } from "react-router-dom";
// const FetchAllData = () => {
//   const [viewResult, setViewResult] = useState([]);
//   console.log(viewResult);
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const { data } = await axios.get(
//           "https://fullstack-student-backend.onrender.com/api/products"
//         );
//         console.log(data);

//         setViewResult(data);
//       } catch (error) {
//         console.error("Result not Found:", error);
//       }
//     };

//     fetchPosts();
//   }, []);
//   const navigate = useNavigate();
//   const productDetails = (_id:any) => { navigate(`/productDetails/${_id}`)};


//   return (
//     <div >
//       <h1>Display Data Screen</h1>

//       <div 
//       style={{
//         display:"flex",
//         flexWrap:"wrap",
//         gap:"10",
//         justifyContent:"space-evenly",
//       }}
//       >
//         {viewResult.map((items:any)=>(
//         <>
//         <div className="card" style={{width: "2rem;"}}>
//           <div>
//           {items.images.map((items:any)=>(
//             <>
//             <img src={items.url} className="card-img-top" alt=""/>
//             </>
//           ))}
         
//         </div>
         
//         <div className="card-body" onClick={()=>productDetails(items._id)}>
//         {/* <a href={`/productDetails/${items._id}`}> */}
//         {/* <Link to={`/productDetails/${items._id}`}> */}
//         <h5 className="card-body">{items.price}</h5>
//         <p className="card-title">{items.category}</p>
//         <p className="card-text">{items.brand}</p>
//         <a href="#" className="btn btn-primary">Add To Cart</a>
//         {/* </a> */}
//         {/* </Link> */}
//         </div>

//         </div>
              
// {/* 
//         <div>
//           {items.fileUrl.map((items:any)=>(
//             <img src={items} alt="" />
//           ))}
//         </div> */}
//        </>
//         ))}
       
//       </div>
//     </div>
//   );
// };

// export default FetchAllData;

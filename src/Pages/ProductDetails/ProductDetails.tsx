// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';

// const ProductDetails = () => {
//     const {id}=useParams()
//     console.log (id)
//     const [viewResult, setViewResult] = useState <any>({});
//     console.log(viewResult);

//     useEffect(() => {
//         const fetchPosts = async () => {
//           try {
//             const { data } = await axios.get(
//               `https://fullstack-student-backend.onrender.com/api/products/${id}`
//             );
//             console.log(data);
    
//             setViewResult(data);
//           } catch (error) {
//             console.error("Result not Found:", error);
//           }
//         };
    
//         fetchPosts();
//       }, []);

//   return (
//     <div>
//         <h1>Product Details Screen</h1>
//         <div>
//             {viewResult?.products?.images?.map((item:any) =>(
//                 <>
//                 <img src={item?.url} alt="" />
//                 </>
//             ))}
//         </div>
//         <div>
//             {viewResult?.products?.ratings?.map((item:any) =>(
//                 <>
//                 <p>{item?.whatever}</p>
//                 </>
//                 ))}
//         </div>
//         <h1>{viewResult?.products?.name}</h1>
//         <h1>{viewResult?.products?.description}</h1>
//         <h1>{viewResult?.products?.price}</h1>
//         <h1>{viewResult?.products?.category}</h1>
//         <h1>{viewResult?.products?.brand}</h1>
//         <h1>{viewResult?.products?.color}</h1> 
//         <h1>{viewResult?.products?.ratings}</h1> 
//     </div>
//   )
// }

// export default ProductDetails
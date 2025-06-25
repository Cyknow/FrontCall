// import React, { useState } from 'react';
// import { RiDeleteBin2Fill, RiOpenSourceFill } from "react-icons/ri";
// import DeleteModal from './DeleteModal';
// import img1 from "../../assets/service-1.jpg";
// import img2 from "../../assets/service-2.jpg";
// import img3 from "../../assets/service-3.jpg";
// import img4 from "../../assets/service-2.jpg";
// import img5 from "../../assets/service-2.jpg";
// import { DisclosureButton } from '@headlessui/react';

// const Events:React.FC = () => {
// const SampleFubction = () => {};

// const [deleteData, setdeleteData] = useState (false);
// const [DataInfo, setDataInfo] = useState <any> ([]);

// const fetchData = () => {
//     setDataInfo([
// {
//     id:1,
//     title: "Aba Kway",
//     image: img1,
//     desc: "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.",
// },
//     {
//     id:2,
//     title: "Graphic Design",
//     image: img2,
//     desc: "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.",
// },
//     {
//     id:3,
//     title: "Content Creation",
//     image: img3,
//     desc: "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.",
// },
//     {
//     id:4,
//     title: "Content Creation",
//     image: img4,
//     desc: "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.",
// },
//     {
//     id:5,
//     title: "Content Creation",
//     image: img5,
//     desc: "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.",
// },
// ])}

// const [toggle, setToggle] = useState <any>("God Is Good");
// console.log (toggle);
// console.log(DataInfo);

// const handleDelete = () => {
//     setdeleteData (true)
// };

// const handleClick = () => {
//     setToggle("I Love My Country Nigeria");
//     // alert("I Love Myself")
// };
//   return (
//     <div>
//         <button onClick={handleClick}>Click Me: <span>{toggle}</span> </button>

//         <div>
//             <p onClick={handleDelete}><RiDeleteBin2Fill style={{color:"red"}}/></p>
//         </div>
//         {deleteData && <DeleteModal/>}
// <h1 onClick={fetchData} style={{cursor: "pointer"}}> Click Here To Display Data </h1>

//     <div style={{display:"flex"}}>
        
//         {DataInfo.map((items:any) =>(

//         <>

//         <div>
//         <h2>{items.title}</h2>
//         <img src={items.image} alt="" />
//         </div>

//         </>

//         ))}
//     </div>
//             {/* a sample of how to display data that is returning as an array */}
//             {/* {dataInfo.map((items:any)=>(
// //             <>
// //             this is where i will be displaying individual data as an Html elements
// //             </>
// //         ))} */}

//     {/* {DataInfo.map((items:any)=>(
//             <>
//             <h1>{items.id}</h1>
//             <h2>{items.title}</h2>
//             <p>{items.image}</p>
//             </>
//         ))} */}
//     </div>
//   );
// }

// export default Events;
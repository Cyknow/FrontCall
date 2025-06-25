// import React, { useState } from 'react';
// import img1 from "../../../src/assets/service-1.jpg";
// import img2 from "../../../src/assets/service-2.jpg";
// import img3 from "../../../src/assets/service-3.jpg";
// import img4 from "../../../src/assets/service-2.jpg";
// import img5 from "../../../src/assets/service-3.jpg";

// const Event = () => {
//     const [info, setInfo ] = useState <any> ("Welcome");
    
//     const [dataInfo, setDataInfo]= useState <any> ([]);
//     console.log(dataInfo);

//     const samplefunction = () => {};

//     const fetchData = () => {
//         setDataInfo ([
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
// ])
//     };
//     const handleClick = () => {
//         // alert("Hello Nigeria");
//         setInfo("Bye Bye");

//     };
//   return (
//     <div>
//       <button onClick={handleClick}>
//         Click: <span style={{color:"green", fontSize:"20px"}}> {info} </span> {""} </button>

//         <button onClick={fetchData}> Display Data </button>
//         {/* a sample of how to display data that is returning as an array */}
//         {/* {dataInfo.map((items:any)=>(
//             <>
//             this is where i will be displaying individual data as an Html elements
//             </>
//         ))} */}

//         {dataInfo.map((items:any)=>(
//             <>
//             <h1>{items.id}</h1>
//             <h2>{items.title}</h2>
//             </>
//         ))}
//     </div>
//   )
// }

// export default Event

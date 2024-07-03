import React from 'react'
import { FaCalendarAlt, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { BsDiagram3, BsTwitterX } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

function Eventcard({ event }) {
    const { _id, title, image, date, location, seat } = event;

    const dateFormat = new Date(date);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = dateFormat.toLocaleDateString('en-US', options);
  return (
    <div className="rounded-md shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg bg-white hover:bg-gray-100" style={{maxWidth:'380px',maxHeight:'450px'}}>
            <div className="rounded-t-md shadow-lg h-60 relative overflow-hidden ">
                <img src={image} alt={title} className="rounded-t-md h-full w-full object-cover transform transition-transform duration-500 hover:scale-110" />
                <div className="absolute  bottom-0 left-0 px-6 py-3 text-white font-semibold rounded-tr-md flex items-center gap-3" style={{backgroundColor:'#9C0C0D'}}> <BsDiagram3 /> {seat} Seat</div>
            </div>
            <div className="px-4 py-6">
                <div className="flex justify-between">
                    <p className="text-sm text-secondary font-medium flex gap-2"><FaCalendarAlt className=" text-base" style={{color:'#9C0C0D'}}/>{formattedDate}</p>
                    <p className="text-sm text-secondary font-medium flex gap-1" style={{overflowX:'hidden'}}><CiLocationOn className=" text-lg font-bold" style={{color:'#9C0C0D'}} /> {location}</p>
                </div>
                <h2 className="text-2xl mt-2 font-semibold text-secondary">{title}</h2>
                <div className="flex justify-between items-center mt-4">
                    <Link to={`/event-details/${_id}`} className=" font-semibold underline" style={{color:'#9C0C0D'}}>Event Details</Link>
                    <div className="flex gap-2 items-center">
                        <a href="/" className="text-sm text-secondary hover:text-primary"><FaFacebook /></a>
                        <a href="/" className="text-sm text-secondary hover:text-primary"><BsTwitterX /></a>
                        <a href="/" className="text-sm text-secondary hover:text-primary"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Eventcard

// import React from 'react';
// import { FaCalendarAlt, FaFacebook, FaLinkedinIn } from 'react-icons/fa';
// import { BsDiagram3, BsTwitterX } from 'react-icons/bs';
// import { CiLocationOn } from 'react-icons/ci';
// import { Link } from 'react-router-dom';
// import { Card } from 'react-bootstrap';

// function Eventcard({ event }) {
//     const { _id, title, image, date, location, seat } = event;

//     const dateFormat = new Date(date);
//     const options = { day: 'numeric', month: 'long', year: 'numeric' };
//     const formattedDate = dateFormat.toLocaleDateString('en-US', options);

//     return (
//         <Card className="rounded-md shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg bg-white hover:bg-gray-100">
//             <div className="rounded-t-md shadow-lg h-60 relative overflow-hidden">
//                 <Card.Img src={image} alt={title} className="rounded-t-md h-full w-full object-cover transform transition-transform duration-500 hover:scale-110" />
//                 <div className="absolute bg-primary bottom-0 left-0 px-6 py-3 text-white font-semibold rounded-tr-md d-flex align-items-center gap-3">
//                     <BsDiagram3 /> {seat} Seat
//                 </div>
//             </div>
//             <Card.Body className="px-4 py-6">
//                 <div className="d-flex justify-content-between">
//                     <p className="text-sm text-secondary font-medium d-flex gap-2"><FaCalendarAlt className="text-primary text-base" />{formattedDate}</p>
//                     <p className="text-sm text-secondary font-medium d-flex gap-1"><CiLocationOn className="text-primary text-lg font-bold" /> {location}</p>
//                 </div>
//                 <Card.Title className="text-2xl mt-2 font-semibold text-secondary">{title}</Card.Title>
//                 <div className="d-flex justify-content-between align-items-center mt-4">
//                     <Link to={`/event-details/${_id}`} className="text-primary font-semibold text-decoration-none">Event Details</Link>
//                     <div className="d-flex gap-2 align-items-center">
//                         <a href="/" className="text-sm text-secondary hover-text-primary"><FaFacebook /></a>
//                         <a href="/" className="text-sm text-secondary hover-text-primary"><BsTwitterX /></a>
//                         <a href="/" className="text-sm text-secondary hover-text-primary"><FaLinkedinIn /></a>
//                     </div>
//                 </div>
//             </Card.Body>
//         </Card>
//     );
// }

// export default Eventcard;

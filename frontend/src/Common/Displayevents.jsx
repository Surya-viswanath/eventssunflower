

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// // import Lottie from "lottie-react";
// import { FaSearch } from "react-icons/fa";
// import { TbCategory2 } from "react-icons/tb";
// // import loadingAnimation from "../../assets/animation/animation.json";
// import Eventcard from './Eventcard';
// import Container from './Container';
// import './Event.css';
// import Eventbanner from './Eventbanner';

// function Displayevents() {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [allEvents, setAllEvents] = useState([]);
//     const [filteredEvents, setFilteredEvents] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchEvents = async () => {
//             try {
//                 const response = await axios.get("https://eventssunflower-2.onrender.com/events");
//                 setAllEvents(response.data);
//                 setFilteredEvents(response.data);
//                 setIsLoading(false);
//             } catch (error) {
//                 setError(error);
//                 setIsLoading(false);
//             }
//         };

//         fetchEvents();
//     }, []);

//     const technology = allEvents.filter(item => item.category === 'technology');
//     const health = allEvents.filter(item => item.category === 'health');
//     const business = allEvents.filter(item => item.category === 'business');
//     const others = allEvents.filter(item => item.category === 'others');

//     const handleSearch = (e) => {
//         e.preventDefault();
//         const searchResult = allEvents.filter(event =>
//             event.title.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//         setFilteredEvents(searchResult);
//     };

//     if (isLoading) {
//         return (
//             // <Lottie
//             //     className="flex justify-center items-center min-h-[70%]"
//             //     animationData={loadingAnimation}
//             //     width={500}
//             //     height={350}
//             // />
//             error
//         );
//     }

//     if (error) {
//         return <p>Error loading events: {error.message}</p>;
//     }

//     return (
//         <div>
//             <Eventbanner />
//             <Container>
//             {/* <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12"> */}
//             <h2 className="text-3xl md:text-5xl font-bold text-center text-secondary mt-10 uppercase">
//                 All Events
//             </h2>
//             {/* <div className="grid grid-cols-1 md:grid-cols-3 my-10 md:my-20 gap-6 " > */}
//             <div className="custom-grid" >
//                 {/* <div className="md:col-span-1 "> */}
//                 <div className="md:col-span-1">
//                     {/* Search */}
//                     <form
//                             onSubmit={handleSearch}
//                             className="flex bg-gray-50 p-5 shadow-md rounded-md"
//                         >
//                             <input
//                                 type="text"
//                                 name="search"
//                                 placeholder="Search by name"
//                                 className="w-full px-4 py-3 border rounded-3xl outline-none border-none bg-gray-200 "
//                                 style={{color:'gray'}}
//                                 onInput={(e) => setSearchTerm(e.target.value)}
//                             />
//                             <button
//                                 type="submit"
//                                 className=" text-white py-3 px-8 rounded-3xl rounded-tl-none -ml-8 text-2xl font-bold"
//                                 style={{backgroundColor:'#9C0C0D'}}
//                             >
//                                 <FaSearch />
//                             </button>
//                         </form>

//                     {/* category */}
//                     <div className="bg-gray-50 shadow-md rounded-md " style={{alignItems:'left'}}>
//                         <div className=""  >
//                             <span className="inline-flex   text-white text-xl font-bold p-3 rounded-r-xl"  style={{backgroundColor:'#9C0C0D',marginLeft:'-63%'}}>
//                                 <TbCategory2 /> Category
//                             </span>
//                         </div>
//                         <div className="mt-3">
//                             <button
//                                 className="block w-full text-left p-4 hover:bg-secondary hover:text-white text-xl border-b"
//                                 onClick={() => setFilteredEvents(allEvents)}
//                             >
//                                 All
//                             </button>
//                             <button
//                                 className="block w-full text-left p-4 hover:bg-secondary hover:text-white text-xl border-b"
//                                 onClick={() => setFilteredEvents(technology)}
//                             >
//                                 Technology
//                             </button>
//                             <button
//                                 className="block w-full text-left p-4 hover:bg-secondary hover:text-white text-xl border-b"
//                                 onClick={() => setFilteredEvents(health)}
//                             >
//                                 Health
//                             </button>
//                             <button
//                                 className="block w-full text-left p-4 hover:bg-secondary hover:text-white text-xl border-b"
//                                 onClick={() => setFilteredEvents(business)}
//                             >
//                                 Business
//                             </button>
//                             <button
//                                 className="block w-full text-left p-4 hover:bg-secondary hover:text-white text-xl"
//                                 onClick={() => setFilteredEvents(others)}
//                             >
//                                 Others
//                             </button>
//                         </div>
//                     </div>


//                 </div>

//                 {/* cards */}
//                 <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6" style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)'}}>
//                     {filteredEvents.map((event) => (
//                         <Eventcard key={event._id} event={event} />
//                     ))}
//                 </div>
             
//             </div>
//             </Container>
//             {/* </div> */}
//         </div>
//     );
// }

// export default Displayevents;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Lottie from "lottie-react";
import { FaSearch } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
// import loadingAnimation from "../../assets/animation/animation.json";
import Eventcard from './Eventcard';

// import './Event.css';
import Eventbanner from './Eventbanner';
import { Card, Col,    Container,    Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsDiagram3, BsTwitterX } from "react-icons/bs";

function Displayevents() {
    const [searchTerm, setSearchTerm] = useState("");
    const [allEvents, setAllEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get("https://eventssunflower-2.onrender.com/events");
                setAllEvents(response.data);
                setFilteredEvents(response.data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const technology = allEvents.filter(item => item.category === 'technology');
    const health = allEvents.filter(item => item.category === 'health');
    const business = allEvents.filter(item => item.category === 'business');
    const others = allEvents.filter(item => item.category === 'others');

    const handleSearch = (e) => {
        e.preventDefault();
        const searchResult = allEvents.filter(event =>
            event.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredEvents(searchResult);
    };

    if (isLoading) {
        return (
            // <Lottie
            //     className="flex justify-center items-center min-h-[70%]"
            //     animationData={loadingAnimation}
            //     width={500}
            //     height={350}
            // />
            error
        );
    }

    if (error) {
        return <p>Error loading events: {error.message}</p>;
    }

    return (
        <div style={{margin:'0%'}}>
            {/* <Eventbanner /> */}
 <Container  style={{ backgroundColor:'black' ,padding:'5% 0%',backgroundSize:'cover'}}>
      <Row>
      <Col>
        <h2 className="text-5xl text-white font-bold">Events</h2>
        <Link to='/' style={{color:'#9C0C0D'}}>Home</Link>
        {/* <Link to='/events' style={{color:'#9C0C0D'}}>Events</Link> */}
        </Col>
      </Row>
    </Container>

            <Container >
            <h2 className="text-3xl md:text-5xl font-bold text-center text-secondary mt-10 uppercase">
                All Events
            </h2>
            <Row style={{marginTop:'5%'}}>
            <Col sm={4}>
                
                    <form
                            onSubmit={handleSearch}
                            className="flex bg-gray-50 p-5 shadow-md rounded-md"
                        >
                            <input
                                type="text"
                                name="search"
                                placeholder="Search by name"
                                className="w-full px-4 py-3 border rounded-3xl outline-none border-none bg-gray-200 "
                                style={{color:'gray'}}
                                onInput={(e) => setSearchTerm(e.target.value)}
                            />
                            <button
                                type="submit"
                                className=" text-white py-3 px-8 rounded-3xl rounded-tl-none -ml-8 text-2xl font-bold"
                                style={{backgroundColor:'#9C0C0D'}}
                            >
                                <FaSearch />
                            </button>
                        </form>
                    <div className="bg-gray-50 shadow-md rounded-md " style={{alignItems:'left'}}>
                        <div className=""  >
                            <span className="inline-flex   text-white text-xl font-bold p-3 rounded-r-xl"  style={{backgroundColor:'#9C0C0D',marginLeft:'-57%'}}>
                                <TbCategory2 /> Category
                            </span>
                        </div>
                        <div className="mt-3">
                            <button
                                className="block w-full text-left p-4 hover:bg-secondary hover:text-white text-xl border-b"
                                onClick={() => setFilteredEvents(allEvents)}
                            >
                                All
                            </button>
                            <button
                                className="block w-full text-left p-4 hover:bg-secondary hover:text-white text-xl border-b"
                                onClick={() => setFilteredEvents(technology)}
                            >
                                Technology
                            </button>
                            <button
                                className="block w-full text-left p-4 hover:bg-secondary hover:text-white text-xl border-b"
                                onClick={() => setFilteredEvents(health)}
                            >
                                Health
                            </button>
                            <button
                                className="block w-full text-left p-4 hover:bg-secondary hover:text-white text-xl border-b"
                                onClick={() => setFilteredEvents(business)}
                            >
                                Business
                            </button>
                            <button
                                className="block w-full text-left p-4 hover:bg-secondary hover:text-white text-xl"
                                onClick={() => setFilteredEvents(others)}
                            >
                                Others
                            </button>
                        </div>
                    </div>


                
            </Col>
                
                <Col sm={12} md={8}>
                        <Row>
                            {filteredEvents.map((event) => (
                                <Col xs={12} sm={6} md={6} lg={6} className="mb-3" key={event._id}>
                                    <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src={event.image} style={{ height: '150px' }} />
                                        <Card.Body>
                                            <Card.Title>{event.title}</Card.Title>
                                            <Card.Text>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <span style={{ color: '#9C0C0D', paddingRight: '3%' }}>
                                                        <BsDiagram3 />
                                                    </span>
                                                    {event.seat} Seat
                                               
                                               
                                                <p style={{paddingLeft:'5%'}}>{formatDate(event.date)}</p>
                                                </div>
                                                <p>{event.location}</p>
                                                <Link to={`/event-details/${event._id}`} className="font-semibold underline" style={{ color: '#9C0C0D' }}>
                                                    Event Details
                                                </Link>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
           
            </Row>
            </Container>
           
        </div>
    );
}

export default Displayevents;

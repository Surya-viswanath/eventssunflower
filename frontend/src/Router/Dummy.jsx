// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Main from './components/Main';
// import ErrorPage from './components/ErrorPage';
// import Home from './components/Home';
// import Booking from './components/Booking';
// import About from './components/About';
// import Contact from './components/Contact';
// import Portfolio from './components/Portfolio';
// import Schedule from './components/Schedule';
// import Login from './components/Login';
// import Register from './components/Register';
// import Events from './components/Events';
// import EventDetails from './components/EventDetails';
// import Shop from './components/Shop';
// import CustomEvent from './components/CustomEvent';
// import PaymentPage from './components/PaymentPage';
// import PaymentSuccess from './components/PaymentSuccess';
// import PaymentFail from './components/PaymentFail';
// import RequestOrganizer from './components/RequestOrganizer';
// import MyCart from './components/MyCart';
// import PrivateRoute from './components/PrivateRoute';
// import Dashboard from './components/Dashboard';
// import DashboardHome from './components/DashboardHome';
// import CustomEventBooking from './components/CustomEventBooking';
// import AddEvent from './components/AddEvent';
// import UpdateEvent from './components/UpdateEvent';
// import Settings from './components/Settings';
// import Profile from './components/Profile';
// import OrganizerRequest from './components/OrganizerRequest';
// import CustomEventDashboard from './components/CustomEventDashboard';
// import DashboardAdminHome from './components/DashboardAdminHome';
// import Wishlist from './components/Wishlist';
// import CustomEventUser from './components/CustomEventUser';
// import UserBookings from './components/UserBookings';
// import PaymentHistory from './components/PaymentHistory';
// import Cart from './components/Cart';
// import AllUsers from './components/AllUsers';
// import EditUser from './components/EditUser';
// import AllEvents from './components/AllEvents';
// import BookedTickets from './components/BookedTickets';
// import AddProduct from './components/AddProduct';
// import AllProducts from './components/AllProducts';
// import ShopOrders from './components/ShopOrders';
// import Mails from './components/Mails';
// import AdminRouter from './components/AdminRouter';

// const Dummy = () => (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Main />} errorElement={<ErrorPage />}>
//         <Route index element={<Home />} />
//         <Route path="booking" element={<Booking />} />
//         <Route path="about" element={<About />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="portfolio" element={<Portfolio />} />
//         <Route path="schedule" element={<Schedule />} />
//         <Route path="login" element={<Login />} />
//         <Route path="register" element={<Register />} />
//         <Route path="events" element={<Events />} />
//         <Route path="event-details/:_id" element={<EventDetails />} />
//         <Route path="shop" element={<Shop />} />
//         <Route path="create-your-event" element={<CustomEvent />} />
//         <Route path="payment/:_id" element={<PaymentPage />} />
//         <Route path="payment/success/:tranId" element={<PaymentSuccess />} />
//         <Route path="payment/fail/:transId" element={<PaymentFail />} />
//         <Route path="request-organizer" element={<RequestOrganizer />} />
//         <Route path="my-cart" element={<MyCart />} />
//       </Route>

//       <Route
//         path="/dashboard"
//         element={
//           <PrivateRoute>
//             <Dashboard />
//           </PrivateRoute>
//         }
//       >
//         <Route path="user" element={<PrivateRoute><DashboardHome /></PrivateRoute>} />
//         <Route path="custom-event-booking" element={<PrivateRoute><CustomEventBooking /></PrivateRoute>} />
//         <Route path="add-event" element={<PrivateRoute><AddEvent /></PrivateRoute>} />
//         <Route
//           path="edit-event/:id"
//           element={<PrivateRoute><UpdateEvent /></PrivateRoute>}
//           loader={({ params }) => fetch(`https://dream-craft-server.vercel.app/event/${params.id}`)}
//         />
//         <Route path="settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
//         <Route path="profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
//         <Route path="organizer-request" element={<PrivateRoute><OrganizerRequest /></PrivateRoute>} />
//         <Route path="custom-event-request" element={<AdminRouter><CustomEventDashboard /></AdminRouter>} />
//         <Route path="admin" element={<AdminRouter><DashboardAdminHome /></AdminRouter>} />
//         <Route path="wishList" element={<PrivateRoute><Wishlist /></PrivateRoute>} />
//         <Route path="customEvent" element={<PrivateRoute><CustomEventUser /></PrivateRoute>} />
//         <Route path="my-bookings" element={<PrivateRoute><UserBookings /></PrivateRoute>} />
//         <Route path="payment-history" element={<PrivateRoute><PaymentHistory /></PrivateRoute>} />
//         <Route path="cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
//         <Route path="all-users" element={<AdminRouter><AllUsers /></AdminRouter>} />
//         <Route
//           path="edit-user/:id"
//           element={<AdminRouter><EditUser /></AdminRouter>}
//           loader={({ params }) => fetch(`https://dream-craft-server.vercel.app/user/${params.id}`, { method: 'POST' })}
//         />
//         <Route path="events" element={<AdminRouter><AllEvents /></AdminRouter>} />
//         <Route path="booked-tickets" element={<AdminRouter><BookedTickets /></AdminRouter>} />
//         <Route path="add-product" element={<AdminRouter><AddProduct /></AdminRouter>} />
//         <Route path="products" element={<AdminRouter><AllProducts /></AdminRouter>} />
//         <Route path="product-orders" element={<AdminRouter><ShopOrders /></AdminRouter>} />
//         <Route path="all-mails" element={<AdminRouter><Mails /></AdminRouter>} />
//       </Route>
//     </Routes>
//   </BrowserRouter>
// );

// export default Dummy;

















// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Signup from '../component/Signup'
// // import Login from './component/Login'
// import Menu from '../component/Menu'
// import EventList from '../component/EventList'
// import ViewClient from '../component/ViewClient'
// import Banner from '../component/Banner'
// import Menu1 from '../component/Menu1'
// import Myevent from '../component/Myevent'
// import Events from '../component/Events'
// import Adminlogin from '../Admin/Adminlogin'
// import Adminmenu from '../Admin/Adminmenu'
// import User from '../Admin/User'
// import Adminbanner from '../Admin/Adminbanner'
// import Managermenu from '../Manager/Managermenu'
// import Managerlogin from '../Manager/Managerlogin'
// import Managersignup from '../Manager/Managersignup'
// import Managers from '../Admin/Managers'
// import Addevent from '../Events/Addevent'
// import Eventadd from '../Manager/Eventadd'
// import Allevents from '../Manager/Allevents'
// import Displayevents from '../Common/Displayevents'
// import Eventdetails from '../Common/Eventdetails'
// import Paymentpage from '../Common/Payment/Paymentpage'
// import About from '../component/About'
// // import Login from './auth/Login'
// import Register from '../auth/Register'
// // import Dashboard from '../Common/Dashboard'
// import PaymentSuccess from '../Common/Payment/PaymentSuccess'
// import UserBookings from '../Common/Payment/userBookings/UserBookings'
// import Login from '../auth/Login'
// import PaymentFail from '../Common/Payment/PaymentFail'
// import Booking from '../Common/booking/Booking'
// import CustomEventUser from '../Common/dashboard/CustomEventUser'
// import CustomEventDashboard from '../Common/dashboard/CustomEventDashboard'
// import DashboardAdminHome from '../Admin/dashboard/DashboardAdminHome'

// import AllUsers from '../Admin/users/AllUsers'
// import DashboardHome from '../dashboard/DashboardHome'
// import Dashboard from '../layout/Dash/Dashboard'
// import Main from '../layout/Main/Main'


// import PrivateRouter from './PrivateRoute'
// import EventAdd from '../Manager/Eventadd'
// import AdminRouter from './AdminRoute'
// import Home from '../home/Home'
// function Routerc() {
//   return (
   
// <BrowserRouter>
// <Routes>
// {/* <Route path="/all" element={<AdminRouter><AllUsers/></AdminRouter>} /> */}
// {/* <Route path="/" element={<Main />} errorElement={<ErrorPage />}> */}
// <Route path="/" element={<Main />}>
// children: [

// <Route path='/' element={<><Home/></>}></Route>
// {/* <Route path='/signup' element={<><Menu/><Signup/></>}></Route> */}
// <Route path='/login' element={<><Login/></>}></Route>
// <Route path='/register' element={<><Register/></>}></Route>
// {/* <Route path='/login' element={<><Menu/><Login/></>}></Route> */}
// {/* <Route path='/admin' element={<><Menu/><Adminlogin/></>}></Route> */}
// <Route path='/adminop' element={<><Adminmenu/><Adminbanner/></>}></Route>
// {/* <Route path='/users' element={<><Adminmenu/><User/></>}></Route>
// <Route path='/admins' element={<><Adminmenu/><Managers/></>}></Route>
// <Route path='/adminlogin' element={<><Menu/><Managerlogin/></>}></Route>
// <Route path='/adminsign' element={<><Menu/><Managersignup/></>}></Route> */}
// {/* <Route path='/event/:email' element={<><Managermenu/></>}></Route>
// <Route path='/viewevent' element={<><Menu/><Events/></>}></Route>
// <Route path='/event' element={<><Menu1/><EventList/></>}></Route>
// <Route path='/myeve/:email' element={<><Menu1/><Myevent/></>}></Route> */}
// {/* <Route path='/home' element={<><Main/></>}></Route> */}
// <Route path='/eventadd' element={<><Addevent/></>}></Route>
// {/* <Route path='/add' element={<><Eventadd/></>}></Route> */}

// <Route path='/events' element={<><Displayevents/></>}></Route>
// <Route path='/event-details/:_id' element={<><Eventdetails/></>}></Route>
// <Route path='/payment/:_id' element={<><Paymentpage/></>}></Route>
// <Route path='/payment/success/:tranId' element={<><PaymentSuccess/></>}></Route>
// <Route path='/payment/fail/:transId' element={<><PaymentFail/></>}></Route>
// <Route path='/my-bookings' element={<><UserBookings/></>}></Route>
// {/* <Route path='/dashboard/customEvent' element={<><CustomEventUser/></>}></Route> */}


// {/* <Route path='/dashboard' element={<><Dashboard/></>}></Route> */}
// {/* <Route path='/dashboard/user' element={<><DashboardHome/></>}></Route> */}
// {/* bookings */}

// <Route path='/booking' element={<><Booking/></>}></Route>
// <Route path='/about' element={<><About/></>}></Route>

// {/* admin*/}

// {/* <Route path='/custom-event-request' element={<><CustomEventDashboard/></>}></Route> */}
// {/* <Route path='/dashboard/admin' element={<><DashboardAdminHome/></>}></Route> */}
// {/* <Route path='/all-users' element={<><AllUsers/></>}></Route> */}
// {/* <Route path='/eve' element={<><Allevents/></>}></Route> */}
// ]
// </Route>

// <Route
//         path="/dashboard"
//         element={
//           <PrivateRouter>
//             <Dashboard />
//           </PrivateRouter>
//         }
//       >
//         <Route path="user" element={<PrivateRouter><DashboardHome /></PrivateRouter>} />
//         {/* <Route path="custom-event-booking" element={<PrivateRouter><CustomEventBooking /></PrivateRouter>} /> */}
//          <Route path="add-event" element={<PrivateRouter><EventAdd/></PrivateRouter>} />
//         {/* <Route
//           path="edit-event/:id"
//           element={<PrivateRouter><UpdateEvent /></PrivateRouter>}
//           loader={({ params }) => fetch(`https://dream-craft-server.vercel.app/event/${params.id}`)}
//         /> */}
//         {/* <Route path="settings" element={<PrivateRouter><Settings /></PrivateRouter>} /> */}
//         {/* <Route path="profile" element={<PrivateRouter><Profile /></PrivateRouter>} /> */}
//         {/* <Route path="organizer-request" element={<PrivateRouter><OrganizerRequest /></PrivateRouter>} /> */}
//         <Route path="custom-event-request" element={<AdminRouter><CustomEventDashboard /></AdminRouter>} />
//         <Route path="admin" element={<AdminRouter><DashboardAdminHome /></AdminRouter>} />
//         {/* <Route path="wishList" element={<PrivateRouter><Wishlist /></PrivateRouter>} /> */}
//         <Route path="customEvent" element={<PrivateRouter><CustomEventUser /></PrivateRouter>} />
//         {/* <Route path="my-bookings" element={<PrivateRouter><UserBookings /></PrivateRouter>} /> */}
//         {/* <Route path="payment-history" element={<PrivateRouter><PaymentHistory /></PrivateRouter>} />
//         <Route path="cart" element={<PrivateRouter><Cart /></PrivateRouter>} /> */}
//         {/* <Route path="all-users" element={<AdminRouter><AllUsers/></AdminRouter>} /> */}
//         {/* <Route
//           path="edit-user/:id"
//           element={<AdminRouter><EditUser /></AdminRouter>}
//           loader={({ params }) => fetch(`https://dream-craft-server.vercel.app/user/${params.id}`, { method: 'POST' })}
//         /> */}
//         <Route path="events" element={<AdminRouter><Allevents/></AdminRouter>} />
//         {/* <Route path="booked-tickets" element={<AdminRouter><BookedTickets /></AdminRouter>} />
//         <Route path="add-product" element={<AdminRouter><AddProduct /></AdminRouter>} />
//         <Route path="products" element={<AdminRouter><AllProducts /></AdminRouter>} />
//         <Route path="product-orders" element={<AdminRouter><ShopOrders /></AdminRouter>} />
//         <Route path="all-mails" element={<AdminRouter><Mails /></AdminRouter>} /> */}
//       </Route>

// </Routes>
// </BrowserRouter>  

//   );
// }

// export default Routerc
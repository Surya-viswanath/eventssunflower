

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from '../component/Signup'
// import Login from './component/Login'
import Menu from '../component/Menu'
import EventList from '../component/EventList'
import ViewClient from '../component/ViewClient'
import Banner from '../component/Banner'
import Menu1 from '../component/Menu1'
import Myevent from '../component/Myevent'
import Events from '../component/Events'
import Adminlogin from '../Admin/Adminlogin'
import Adminmenu from '../Admin/Adminmenu'
import User from '../Admin/User'
import Adminbanner from '../Admin/Adminbanner'
import Managermenu from '../Manager/Managermenu'
import Managerlogin from '../Manager/Managerlogin'
import Managersignup from '../Manager/Managersignup'
import Managers from '../Admin/Managers'
import Addevent from '../Events/Addevent'
import Eventadd from '../Manager/Eventadd'
import Allevents from '../Manager/Allevents'
import Displayevents from '../Common/Displayevents'
import Eventdetails from '../Common/Eventdetails'
import Paymentpage from '../Common/Payment/Paymentpage'
import About from '../component/About'
// import Login from './auth/Login'
import Register from '../auth/Register'
// import Dashboard from '../Common/Dashboard'
import PaymentSuccess from '../Common/Payment/PaymentSuccess'
import UserBookings from '../Common/Payment/userBookings/UserBookings'
import Login from '../auth/Login'
import PaymentFail from '../Common/Payment/PaymentFail'
import Booking from '../Common/booking/Booking'
import CustomEventUser from '../Common/dashboard/CustomEventUser'
import CustomEventDashboard from '../Common/dashboard/CustomEventDashboard'
import DashboardAdminHome from '../Admin/dashboard/DashboardAdminHome'

import AllUsers from '../Admin/users/AllUsers'
import DashboardHome from '../dashboard/DashboardHome'
import Dashboard from '../layout/Dash/Dashboard'
import Main from '../layout/Main/Main'


import PrivateRouter from './PrivateRoute'
import EventAdd from '../Manager/Eventadd'
import AdminRouter from './AdminRoute'
import Home from '../home/Home'
import RequestOrganizer from '../Manager/RequestOrganizer'
import OrganizerRequest from '../Manager/OrganizerRequest'
import BookedTickets from '../Admin/BookedTickets'
import PaymentHistory from '../Common/Payment/PaymentHistory'
import Contact from '../Common/Contact'
import Profile from '../component/Profile'
function Routerc() {
  return (
   
<BrowserRouter>
<Routes>
{/* <Route path="/all" element={<AdminRouter><AllUsers/></AdminRouter>} /> */}
{/* <Route path="/" element={<Main />} errorElement={<ErrorPage />}> */}
<Route path="/" element={<Main />}>
children: [

<Route path='/' element={<><Home/></>}></Route>
<Route path='/contact' element={<><Contact/></>}></Route>
<Route path='/login' element={<><Login/></>}></Route>
<Route path='/register' element={<><Register/></>}></Route>
<Route path='/request-organizer' element={<><RequestOrganizer/></>}></Route>
{/* <Route path='/admin' element={<><Menu/><Adminlogin/></>}></Route> */}
{/* <Route path='/adminop' element={<><Adminmenu/><Adminbanner/></>}></Route> */}
{/* <Route path='/users' element={<><Adminmenu/><User/></>}></Route>
<Route path='/admins' element={<><Adminmenu/><Managers/></>}></Route>
<Route path='/viewevent' element={<><Menu/><Events/></>}></Route>
<Route path='/event' element={<><Menu1/><EventList/></>}></Route>
<Route path='/myeve/:email' element={<><Menu1/><Myevent/></>}></Route> */}
{/* <Route path='/home' element={<><Main/></>}></Route> */}
<Route path='/eventadd' element={<><Addevent/></>}></Route>
{/* <Route path='/add' element={<><Eventadd/></>}></Route> */}

<Route path='/events' element={<><Displayevents/></>}></Route>
<Route path='/event-details/:_id' element={<><Eventdetails/></>}></Route>
<Route path='/payment/:_id' element={<><Paymentpage/></>}></Route>
<Route path='/payment/success/:tranId' element={<><PaymentSuccess/></>}></Route>
<Route path='/payment/fail/:transId' element={<><PaymentFail/></>}></Route>
{/* <Route path='/my-bookings' element={<><UserBookings/></>}></Route> */}
{/* <Route path='/dashboard/customEvent' element={<><CustomEventUser/></>}></Route> */}


{/* <Route path='/dashboard' element={<><Dashboard/></>}></Route> */}
{/* <Route path='/dashboard/user' element={<><DashboardHome/></>}></Route> */}
{/* bookings */}

<Route path='/booking' element={<><Booking/></>}></Route>
<Route path='/about' element={<><About/></>}></Route>

{/* admin*/}

{/* <Route path='/custom-event-request' element={<><CustomEventDashboard/></>}></Route> */}
{/* <Route path='/dashboard/admin' element={<><DashboardAdminHome/></>}></Route> */}
{/* <Route path='/all-users' element={<><AllUsers/></>}></Route> */}
{/* <Route path='/eve' element={<><Allevents/></>}></Route> */}
]
</Route>
{/*  private route &  admin route  */}
<Route
        path="/dashboard"
        element={
          <PrivateRouter>
            <Dashboard />
          </PrivateRouter>
        }
      >
        <Route path="user" element={<PrivateRouter><DashboardHome /></PrivateRouter>} />
        {/* <Route path="custom-event-booking" element={<PrivateRouter><CustomEventBooking /></PrivateRouter>} /> */}
         <Route path="add-event" element={<PrivateRouter><EventAdd/></PrivateRouter>} />

         <Route path='my-bookings' element={<PrivateRouter><UserBookings/></PrivateRouter>}></Route>
        {/* <Route
          path="edit-event/:id"
          element={<PrivateRouter><UpdateEvent /></PrivateRouter>}
          loader={({ params }) => fetch(`https://dream-craft-server.vercel.app/event/${params.id}`)}
        /> */}
        {/* <Route path="settings" element={<PrivateRouter><Settings /></PrivateRouter>} /> */}
        <Route path="profile" element={<PrivateRouter><Profile/></PrivateRouter>} />
        <Route path="organizer-request" element={<PrivateRouter><OrganizerRequest/></PrivateRouter>} />
        {/* <Route path="custom-event-request" element={<AdminRouter><CustomEventDashboard /></AdminRouter>} /> */}
        <Route path="custom-event-request" element={<PrivateRouter><CustomEventDashboard /></PrivateRouter>} />
        <Route path="admin" element={<PrivateRouter><DashboardAdminHome /></PrivateRouter>} />
        {/* <Route path="wishList" element={<PrivateRouter><Wishlist /></PrivateRouter>} /> */}
        <Route path="customEvent" element={<PrivateRouter><CustomEventUser /></PrivateRouter>} />
        {/* <Route path="my-bookings" element={<PrivateRouter><UserBookings /></PrivateRouter>} /> */}
        <Route path="payment-history" element={<PrivateRouter><PaymentHistory /></PrivateRouter>} />
        {/* <Route path="cart" element={<PrivateRouter><Cart /></PrivateRouter>} /> */}
        <Route path="all-users" element={<PrivateRouter><AllUsers/></PrivateRouter>} />
        {/* <Route
          path="edit-user/:id"
          element={<AdminRouter><EditUser /></AdminRouter>}
          loader={({ params }) => fetch(`https://dream-craft-server.vercel.app/user/${params.id}`, { method: 'POST' })}
        /> */}

        <Route path="events" element={<PrivateRouter><Allevents/></PrivateRouter>} />
        <Route path="booked-tickets" element={<PrivateRouter><BookedTickets /></PrivateRouter>} />
        {/* <Route path="add-product" element={<AdminRouter><AddProduct /></AdminRouter>} />
        <Route path="products" element={<AdminRouter><AllProducts /></AdminRouter>} />
        <Route path="product-orders" element={<AdminRouter><ShopOrders /></AdminRouter>} />
        <Route path="all-mails" element={<AdminRouter><Mails /></AdminRouter>} /> */}
      </Route>

</Routes>
</BrowserRouter>  

  );
}

export default Routerc
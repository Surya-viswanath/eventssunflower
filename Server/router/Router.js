const express = require('express');

const {clientSignup,getclient,deleteclient} = require('../controller/Clientsignup');
const jwttoken = require('../Token/token');
const protect = require('../Middlewear/Tocken');
const login = require('../controller/Login');

// const { getevents, Createvents, deleteevent } = require('../controller/Eventss');
const { adminSignup } = require('../controller/Adminsignup');
const adminlogin = require('../controller/Adminlogin');

const managerlogin = require('../controller/Managerlogin');
const { managerSignup, getmanager, deletemanager } = require('../controller/Managersign');
const { addEvent, Getevent, singleEvent } = require('../controller/event/eventControll');
// const { userSignUp } = require('../controller/user/userSignUpp');
const userSignIn = require('../controller/user/userSignIn');
const { authVerify } = require('../controller/auth/authVerify');
const payment = require('../controller/payment/getPayment');
// const { payment } = require('../controller/payment/getPayment');
// const payment = require('../controller/payment/getPayment');

// const { userSignIn } = require('../controller/user/userSignIn');
const userSignUp = require('../controller/user/userSignUpp');
const CustomEvents = require('../event/events/customEventPost');
const inboxByUser = require('../event/events/inboxByUser');
const findCustomEvent = require('../event/events/findCustomEvent');
const updatePendingStatus = require('../event/events/updatePendingStatus');

const postRequest = require('../controller/organizer-rqst/postRequest');
const checkPendingRequest = require('../controller/organizer-rqst/checkPendingRequest');
const requestReject = require('../controller/organizer-rqst/requestReject');
const requestAccept = require('../controller/organizer-rqst/requestAccept');
const findAll = require('../controller/organizer-rqst/FindallRequest');

const { allUsers, deleteUser } = require('../controller/user/findalluser');
const allPaymentHistory  = require('../controller/payment/allPaymentHistory');
const { deleteevent } = require('../controller/Event');
const findall = require('../controller/payment/findAll');
const {postContact, findcontact} = require('../controller/contact/Contact');


const router = express.Router();
const middleware=[protect]

// router.route('/Signupclient').post(clientSignup)
router.route('/Signupadmin').post(adminSignup)
// router.route('/verify').get(middleware,clientSignup)
router.route('/Signupclient').post(userSignUp)
router.route('/login').post(userSignIn)
router.route('/token-verify').post(authVerify)



router.route('/order').post(payment)
router.route('/orders/:email').get(allPaymentHistory)
router.route('/bookings').get(findall)
// router.route('/orders/:id').get(PaymentHistory)


router.route('/contact').post(postContact)
router.route('/contact').get(findcontact) 


router.route('/adminlogin').post(adminlogin)
router.route('/managerlogin').post(managerlogin)
router.route('/Signupmanager').post(managerSignup)

router.route('/getclient').get(getclient)  
router.route('/getmanager').get(getmanager)  
router.route('/deletemanager/:id').delete(deletemanager)
router.route('/delete/:id').delete(deleteclient)


router.route('/delete-event/:id').delete(deleteevent)
router.route('/custom-event').post(CustomEvents)
router.route('/custom-event/inbox').get(inboxByUser)

router.route('/add-event').post(addEvent);
router.route('/events').get(Getevent);
router.route('/event/:id').get(singleEvent);



router.route('/request-organizer/accept/:id').put(requestAccept)
router.route('/request-organizer/reject/:id').put(requestReject)
router.route('/request-organizer').post(postRequest)
router.route('/request-organizer').get(findAll)
router.route('/check-pending-request').get(checkPendingRequest)
//admin//
router.route('/custom-event').get(findCustomEvent)
router.route('/custom-event/:id').patch(updatePendingStatus)
router.route('/users').get(allUsers)
router.route('/delete-user/:id').delete(deleteUser)
module.exports =router
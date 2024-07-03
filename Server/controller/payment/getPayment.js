
// const SSLCommerzPayment = require('sslcommerz-lts');
// // import Transaction from "../../../models/Transaction.js";
// const Transaction= require('../../modal/Transaction.js');
// // import { Types } from "mongoose";
// const Types = require('mongoose');
// // import 'dotenv/config'

// const store_id = 'seven6676bd7043166'
// const store_passwd = 'seven6676bd7043166@ssl'
// const is_live = false

// const payment = async (req, res) => {

//     const order = req.body
//     const tran_id = new Types.ObjectId().toHexString()

//     const data = {
//         event_id: order.eventId,
//         event_image: order.eventImage,
//         event_date: order.eventDate,
//         total_amount: order.amount,
//         currency: order.currency,
//         tran_id: tran_id,
//         success_url: `http://localhost:4000/payment/success/${tran_id}`,
//         // success_url: `http://localhost:8080/payment/success/${tran_id}`,
//         fail_url: `http://localhost:4000/payment/fail/${tran_id}`,
//         cancel_url: 'http://localhost:4000/',

//         ipn_url: 'http://localhost:4000/ipn',
//         shipping_method: 'Courier',
//         product_name: 'Computer.',
//         product_category: 'Electronic',
//         product_profile: 'general',
//         cus_name: order.name,
//         cus_email: order.email,
//         cus_add1: 'Dhaka',
//         cus_add2: 'Dhaka',
//         cus_city: 'Dhaka',
//         cus_state: 'Dhaka',
//         cus_postcode: '1000',
//         cus_country: 'Bangladesh',
//         cus_phone: '01711111111',
//         cus_fax: '01711111111',
//         ship_name: 'Customer Name',
//         ship_add1: 'Dhaka',
//         ship_add2: 'Dhaka',
//         ship_city: 'Dhaka',
//         ship_state: 'Dhaka',
//         ship_postcode: 1000,
//         ship_country: 'Bangladesh',
//         eventTitle: order.eventTitle,
//     };

//     try {
//         const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
//         const apiResponse = await sslcz.init(data);

//         // Redirect the user to the payment gateway
//         res.send({ url: apiResponse.GatewayPageURL });

//         // Save payment details to the database
//         const payment = new Transaction({
//             event_id: data.event_id,
//             eventImage: data.event_image,
//             eventTitle: data.eventTitle,
//             eventDate: data.event_date,
//             total_amount: data.total_amount,
//             currency: data.currency,
//             tran_id: data.tran_id,
//             cus_name: data.cus_name,
//             cus_email: data.cus_email,
//             cus_address: data.cus_add1,
//             paidStatus: false
//         });

//         await payment.save();

//         // console.log('Redirecting to:', apiResponse);

//     } catch (error) {
//         console.error('Error initializing payment:', error);
//         res.status(500).send('Error initializing payment');
//     }
// };

// module.exports = payment

// const SSLCommerzPayment = require('sslcommerz-lts');
// const Transaction = require('../../modal/Transaction.js');
// const mongoose = require('mongoose');  // Import mongoose

// const store_id = 'seven6676bd7043166';
// const store_passwd = 'seven6676bd7043166@ssl';
// const is_live = false;

// const payment = async (req, res) => {
//     const order = req.body;
//     const tran_id = new mongoose.Types.ObjectId().toHexString();  // Corrected line

//     const data = {
//         event_id: order.eventId,
//         event_image: order.eventImage,
//         event_date: order.eventDate,
//         total_amount: order.amount,
//         currency: order.currency,
//         tran_id: tran_id,
//         success_url: `http://localhost:4000/payment/success/${tran_id}`,
//         fail_url: `http://localhost:4000/payment/fail/${tran_id}`,
//         cancel_url: 'http://localhost:4000/',
//         ipn_url: 'http://localhost:4000/ipn',
//         shipping_method: 'Courier',
//         product_name: 'Computer',
//         product_category: 'Electronic',
//         product_profile: 'general',
//         cus_name: order.name,
//         cus_email: order.email,
//         cus_add1: 'Dhaka',
//         cus_add2: 'Dhaka',
//         cus_city: 'Dhaka',
//         cus_state: 'Dhaka',
//         cus_postcode: '1000',
//         cus_country: 'Bangladesh',
//         cus_phone: '01711111111',
//         cus_fax: '01711111111',
//         ship_name: 'Customer Name',
//         ship_add1: 'Dhaka',
//         ship_add2: 'Dhaka',
//         ship_city: 'Dhaka',
//         ship_state: 'Dhaka',
//         ship_postcode: 1000,
//         ship_country: 'Bangladesh',
//         eventTitle: order.eventTitle,
//     };

//     try {
//         const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
//         const apiResponse = await sslcz.init(data);

//         // Redirect the user to the payment gateway
//         res.send({ url: apiResponse.GatewayPageURL });

//         // Save payment details to the database
//         const payment = new Transaction({
//             event_id: data.event_id,
//             eventImage: data.event_image,
//             eventTitle: data.eventTitle,
//             eventDate: data.event_date,
//             total_amount: data.total_amount,
//             currency: data.currency,
//             tran_id: data.tran_id,
//             cus_name: data.cus_name,
//             cus_email: data.cus_email,
//             cus_address: data.cus_add1,
//             paidStatus: false
//         });

//         await payment.save();

//     } catch (error) {
//         console.error('Error initializing payment:', error);
//         res.status(500).send('Error initializing payment');
//     }
// };

// module.exports = payment;

// const mongoose = require('mongoose');
// const SSLCommerzPayment = require('sslcommerz-lts');
// const Transaction = require('../../modal/Transaction.js');

// const store_id = 'seven6676bd7043166';
// const store_passwd = 'seven6676bd7043166@ssl';
// const is_live = false;

// const payment = async (req, res) => {
//     const order = req.body;
//     const tran_id = new mongoose.Types.ObjectId().toHexString();

//     const data = {
//         event_id: order.eventId,
//         event_image: order.eventImage,
//         event_date: order.eventDate,
//         total_amount: order.amount,
//         currency: order.currency,
//         tran_id: tran_id,
//         success_url: `http://localhost:4000/payment/success/${tran_id}`,
//         fail_url: `http://localhost:4000/payment/fail/${tran_id}`,
//         cancel_url: 'http://localhost:4000/',
//         ipn_url: 'http://localhost:4000/ipn',
//         shipping_method: 'Courier',
//         product_name: 'Computer',
//         product_category: 'Electronic',
//         product_profile: 'general',
//         cus_name: order.name,
//         cus_email: order.email,
//         cus_add1: 'Dhaka',
//         cus_add2: 'Dhaka',
//         cus_city: 'Dhaka',
//         cus_state: 'Dhaka',
//         cus_postcode: '1000',
//         cus_country: 'Bangladesh',
//         cus_phone: '01711111111',
//         cus_fax: '01711111111',
//         ship_name: 'Customer Name',
//         ship_add1: 'Dhaka',
//         ship_add2: 'Dhaka',
//         ship_city: 'Dhaka',
//         ship_state: 'Dhaka',
//         ship_postcode: 1000,
//         ship_country: 'Bangladesh',
//         eventTitle: order.eventTitle,
//     };

//     try {
//         const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
//         const apiResponse = await sslcz.init(data);

//         if (apiResponse.GatewayPageURL) {
//             res.send({ url: apiResponse.GatewayPageURL });

//             const payment = new Transaction({
//                 event_id: data.event_id,
//                 eventImage: data.event_image,
//                 eventTitle: data.eventTitle,
//                 eventDate: data.event_date,
//                 total_amount: data.total_amount,
//                 currency: data.currency,
//                 tran_id: data.tran_id,
//                 cus_name: data.cus_name,
//                 cus_email: data.cus_email,
//                 cus_address: data.cus_add1,
//                 paidStatus: false
//             });

//             await payment.save();
//         } else {
//             res.status(500).send('Failed to initialize payment');
//         }

//     } catch (error) {
//         console.error('Error initializing payment:', error);
//         res.status(500).send('Error initializing payment');
//     }
// };

// module.exports = payment;


// const mongoose = require('mongoose');
// const SSLCommerzPayment = require('sslcommerz-lts');
// const Transaction = require('../../modal/Transaction.js');

// const store_id = 'seven6676bd7043166';
// const store_passwd = 'seven6676bd7043166@ssl';
// const is_live = false;

// const payment = async (req, res) => {
//     const order = req.body;
//     const tran_id = new mongoose.Types.ObjectId().toHexString();

//     const data = {
//         event_id: order.eventId,
//         event_image: order.eventImage,
//         event_date: order.eventDate,
//         total_amount: order.amount,
//         currency: order.currency,
//         tran_id: tran_id,
//         success_url: `http://localhost:4000/payment/success/${tran_id}`,
//         fail_url: `http://localhost:4000/payment/fail/${tran_id}`,
//         cancel_url: 'http://localhost:4000/',
//         ipn_url: 'http://localhost:4000/ipn',
//         shipping_method: 'Courier',
//         product_name: 'Computer',
//         product_category: 'Electronic',
//         product_profile: 'general',
//         cus_name: order.name,
//         cus_email: order.email,
//         cus_add1: 'Dhaka',
//         cus_add2: 'Dhaka',
//         cus_city: 'Dhaka',
//         cus_state: 'Dhaka',
//         cus_postcode: '1000',
//         cus_country: 'Bangladesh',
//         cus_phone: '01711111111',
//         cus_fax: '01711111111',
//         ship_name: 'Customer Name',
//         ship_add1: 'Dhaka',
//         ship_add2: 'Dhaka',
//         ship_city: 'Dhaka',
//         ship_state: 'Dhaka',
//         ship_postcode: 1000,
//         ship_country: 'Bangladesh',
//         eventTitle: order.eventTitle,
//     };

//     try {
//         const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
//         const apiResponse = await sslcz.init(data);

//         if (apiResponse.GatewayPageURL) {
//             res.send({ url: apiResponse.GatewayPageURL });

//             const payment = new Transaction({
//                 event_id: data.event_id,
//                 eventImage: data.event_image,
//                 eventTitle: data.eventTitle,
//                 eventDate: data.event_date,
//                 total_amount: data.total_amount,
//                 currency: data.currency,
//                 tran_id: data.tran_id,
//                 cus_name: data.cus_name,
//                 cus_email: data.cus_email,
//                 cus_address: data.cus_add1,
//                 paidStatus: false
//             });

//             await payment.save();
//         } else {
//             console.error('Failed to initialize payment:', apiResponse);
//             res.status(500).send('Failed to initialize payment');
//         }

//     } catch (error) {
//         console.error('Error initializing payment:', error);
//         res.status(500).send('Error initializing payment');
//     }
// };

// module.exports = payment;


// const axios = require('axios');
// const mongoose = require('mongoose');
// const Transaction = require('../../modal/Transaction.js');

// const store_id = 'your_store_id';
// const store_passwd = 'your_store_password';
// const is_live = false;

// const payment = async (req, res) => {
//     const order = req.body;
//     const tran_id = new mongoose.Types.ObjectId().toHexString();

//     const data = {
//         store_id,
//         store_passwd,
//         ...order,
//         tran_id,
//         success_url: `http://localhost:4000/payment/success/${tran_id}`,
//         fail_url: `http://localhost:4000/payment/fail/${tran_id}`,
//         cancel_url: 'http://localhost:4000/',
//         ipn_url: 'http://localhost:4000/ipn'
//     };

//     try {
//         const response = await axios.post('https://sandbox.sslcommerz.com/securepay/api.php/get_emi', data);
        
//         if (response.data && response.data.GatewayPageURL) {
//             res.send({ url: response.data.GatewayPageURL });

//             const payment = new Transaction({
//                 event_id: order.eventId,
//                 eventImage: order.eventImage,
//                 eventTitle: order.eventTitle,
//                 eventDate: order.eventDate,
//                 total_amount: order.amount,
//                 currency: order.currency,
//                 tran_id: tran_id,
//                 cus_name: order.name,
//                 cus_email: order.email,
//                 cus_address: order.address,
//                 paidStatus: false
//             });

//             await payment.save();
//         } else {
//             console.error('Failed to initialize payment:', response.data);
//             res.status(500).send('Failed to initialize payment');
//         }

//     } catch (error) {
//         console.error('Error initializing payment:', error.response ? error.response.data : error.message);
//         res.status(500).send('Error initializing payment');
//     }
// };

// module.exports = payment;



// const axios = require('axios');
// const mongoose = require('mongoose');
// const Transaction = require('../../modal/Transaction.js');

// const store_id = 'seven6676bd7043166';
// const store_passwd = 'seven6676bd7043166@ssl';
// const is_live = false;

// const payment = async (req, res) => {
//     const order = req.body;
//     const tran_id = new mongoose.Types.ObjectId().toHexString();

//     const data = {
//         store_id,
//         store_passwd,
//         ...order,
//         tran_id,
//         success_url: `http://localhost:3000/payment/success/${tran_id}`,
//         fail_url: `http://localhost:3000/payment/fail/${tran_id}`,
//         cancel_url: 'http://localhost:3000/',
//         ipn_url: 'http://localhost:3000/ipn'
//     };

//     try {
//         // const response = await axios.post('https://sandbox.sslcommerz.com/securepay/api.php/get_emi', data);
//         const response = await axios.post('https://sandbox.sslcommerz.com/gwprocess/v3/api.php', data);
//         if (response.data && response.data.GatewayPageURL) {
//             res.send({ url: response.data.GatewayPageURL });

//             const payment = new Transaction({
//                 // event_id: order.eventId,
//                 // eventImage: order.eventImage,
//                 // eventTitle: order.eventTitle,
//                 // eventDate: order.eventDate,
//                 // total_amount: order.amount,
//                 // currency: order.currency,
//                 // tran_id: tran_id,
//                 // cus_name: order.name,
//                 // cus_email: order.email,
//                 // cus_address: order.address,
//                 // paidStatus: false


//                 shipping_method: 'Courier',
//         product_name: 'Computer.',
//         product_category: 'Electronic',
//         product_profile: 'general',
//         cus_name: order.name,
//         cus_email: order.email,
//         cus_add1: 'Dhaka',
//         cus_add2: 'Dhaka',
//         cus_city: 'Dhaka',
//         cus_state: 'Dhaka',
//         cus_postcode: '1000',
//         cus_country: 'india',
//         cus_phone: '01711111111',
//         cus_fax: '01711111111',
//         ship_name: 'Customer Name',
//         ship_add1: 'Dhaka',
//         ship_add2: 'Dhaka',
//         ship_city: 'Dhaka',
//         ship_state: 'Dhaka',
//         ship_postcode: 1000,
//         ship_country: 'india',
//         eventTitle: order.eventTitle,
//             });

//             await payment.save();
//         } else {
//             console.error('Failed to initialize payment:', response.data);
//             res.status(500).send({ message: 'Failed to initialize payment', data: response.data });
//         }

//     } catch (error) {
//         console.error('Error initializing payment:', error.response ? error.response.data : error.message);
//         res.status(500).send({ message: 'Error initializing payment', error: error.response ? error.response.data : error.message });
//     }
// };

// module.exports = payment;




const SSLCommerzPayment = require('sslcommerz-lts');
const axios = require('axios');
const mongoose = require('mongoose');
const Transaction = require('../../modal/Transaction.js');

const store_id = 'seven6676bd7043166';
const store_passwd = 'seven6676bd7043166@ssl';
const is_live = false;

const payment = async (req, res) => {
    const order = req.body;
    const tran_id = new mongoose.Types.ObjectId().toHexString();

    const data = {
        event_id: order.eventId,
        event_image: order.eventImage,
        event_date: order.eventDate,
        total_amount: order.amount,
        currency: order.currency,
        tran_id: tran_id,
        success_url: `http://localhost:3000/payment/success/${tran_id}`,
        fail_url: `http://localhost:3000/payment/fail/${tran_id}`,
        cancel_url: 'https://localhost:3000/',
        ipn_url: 'http://localhost:3030/ipn',
        shipping_method: 'Courier',
        product_name: 'Computer.',
        product_category: 'Electronic',
        product_profile: 'general',
        cus_name: order.name,
        cus_email: order.email,
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: '01711111111',
        cus_fax: '01711111111',
        ship_name: 'Customer Name',
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
        eventTitle: order.eventTitle,
    };

    try {
        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
        const apiResponse = await sslcz.init(data);

        // Redirect the user to the payment gateway
        res.send({ url: apiResponse.GatewayPageURL });

        // Save payment details to the database
        const payment = new Transaction({
            event_id: data.event_id,
            eventImage: data.event_image,
            eventTitle: data.eventTitle,
            eventDate: data.event_date,
            total_amount: data.total_amount,
            currency: data.currency,
            tran_id: data.tran_id,
            cus_name: data.cus_name,
            cus_email: data.cus_email,
            cus_address: data.cus_add1,
            paidStatus: false
        });

        await payment.save();

    } catch (error) {
        console.error('Error initializing payment:', error);
        res.status(500).send('Error initializing payment');
    }
};

module.exports = payment;
// import getAllPaymentHistory from "../../../lib/payment/getAllPaymentHistory.js";

// const allPaymentHistory = async(req, res) => {
//     const email = req.params.email;
//     try {
//         const result = await getAllPaymentHistory(email)
//         res.send(result)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// }

// export default allPaymentHistory;


const Transaction = require('../../modal/Transaction.js');

const allPaymentHistory = async (req, res) => {
    const email = req.params.email;
    try {
        const result = await getAllPaymentHistory(email);
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getAllPaymentHistory = async (email) => {
    try {
        const cursor = await Transaction.find({ cus_email: email });
        return cursor;
    } catch (err) {
        throw new Error(err);
    }
};





// const PaymentHistory = async (req, res) => {
//     const email = req.params.id;
//     try {
//         const result = await getPaymentHistory(email);
//         res.send(result);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// };

// const getPaymentHistory = async (id) => {
//     try {
//         const cursor = await Transaction.find({ event_id: id });
//         return cursor;
//     } catch (err) {
//         throw new Error(err);
//     }
// };

// module.exports= {allPaymentHistory,PaymentHistory};
module.exports= allPaymentHistory;
// const Transaction = require("../../modal/Transaction");

// const allPaymentHistory = async (req, res) => {
//     const collectionlist = await Transaction.find();
//     res.json(collectionlist);
//   };
//   module.exports= allPaymentHistory;
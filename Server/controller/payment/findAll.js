const Transaction = require("../../modal/Transaction");



const findall = async (req, res) => {
    try {
        // const result = await Transaction.find({ paidStatus: true });
        const result = await Transaction.find();
        res.send(result)
    } catch (error) {
        return res.send(error);
    }
}

module.exports = findall;
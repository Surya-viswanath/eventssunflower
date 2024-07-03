
const Contacteve = require("../../modal/Contact");

const postContact = async (req, res) => {
    const request = req.body;

    try {
        const newRequest = new Contacteve(request);
        const result = await newRequest.save();
        res.send(result);
    } catch (error) {
        console.error('Error saving request:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


const findcontact = async (req, res) => {
    try {
        // const result = await Transaction.find({ paidStatus: true });
        const result = await Contacteve.find();
        res.send(result)
    } catch (error) {
        return res.send(error);
    }
}
module.exports ={postContact,findcontact };




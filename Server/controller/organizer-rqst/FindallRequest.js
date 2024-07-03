const OrganizerRequest = require("../../modal/OrganizerRequest");


const findAll = async (req, res) => {
    try {
        const result = await findAllRequests();
        res.send(result);
    } catch (error) {
        res.send(error);
    }
};

const findAllRequests = async () => {
    const cursor = await OrganizerRequest.find();
    return cursor;
};

module.exports= findAll;
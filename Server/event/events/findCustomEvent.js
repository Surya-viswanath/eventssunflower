const CustomEvent = require('../../modal/CustomEvent.js');

const findCustomEvent = async (req, res) => {
    try {
        const result = await CustomEvent.find()
        res.send(result)
    } catch (error) {
        return res.send(error)
    }
}

module.exports= findCustomEvent;
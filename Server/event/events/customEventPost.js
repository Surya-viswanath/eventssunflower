
const CustomEvent = require('../../modal/CustomEvent.js');

const CustomEvents = async (req, res) => {
    const request = req.body;
console.log(request);
    try {
        const CustomEventsPost = new CustomEvent(request);
        const result = await CustomEventsPost.save();
        res.send(result);
    } catch (error) {
        console.error('Error saving request:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports =CustomEvents;
const CustomEvent = require('../../modal/CustomEvent.js');

const updatePendingStatus = async (req, res) => {
    const filter = {
        _id: req.params.id,
    };

    const update = {
        $set: {
            status: 'approved'
        }
    }
    try {

        const updateStatus = await CustomEvent.findOneAndUpdate(filter, update)
        res.send(updateStatus)
      
        
    } catch (error) {
        console.error("Error updating status:", error)
    }


}

module.exports = updatePendingStatus;
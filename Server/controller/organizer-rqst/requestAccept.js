const OrganizerRequest = require("../../modal/OrganizerRequest");



const requestAccept = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedRequest = await OrganizerRequest.findByIdAndUpdate(
            { _id: id },
            { status: 'accepted' },
            { new: true }
        );

        if (!updatedRequest) {
            return res.status(404).send({ message: 'Request not found' });
        }

        res.send(updatedRequest);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
    }
};

module.exports =requestAccept;
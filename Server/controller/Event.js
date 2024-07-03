const Event = require("./EventSchema");


const Createvent = async (req, res) => {
  const {
    Email,
    Time,
    Type,
    Place,
    Date,
  } = req.body;
  const listingevent= await Event.create({
    Email,
    Time,
    Type,
    Place,
    Date,
  });
  res.json(listingevent);
};

const getevent = async (req, res) => {
  const eventList = await Event.find();
  res.json(eventList);
};

const deleteevent = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedevent = await Event.findByIdAndDelete(id);
    if (!deletedevent) {
      return res.status(404).json({ message: "List not found" });
    }
    res.json({ message: "List deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {Createvent,getevent,deleteevent}


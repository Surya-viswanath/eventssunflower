
const Events = require("../../modal/Event");
const addEvent = async (req, res) => {
   
    const { title, type, location, speakers, sponsor, description, seat, image, date,email} = req.body;
    try {
        const newEvent = new Events({ title, type, location, speakers, sponsor, description, seat, image, date,email });
        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const Getevent = async (req, res) => {
    const eventList = await Events.find();
    res.json(eventList);
  };

  const singleEvent = async (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const getone = await Events.findById(id)
    res.json(getone);
  };
// const singleEvent = async (req, res) => {
//     const { id } = req.params;  // Ensure to destructure id correctly
//     console.log(id);  // Debug to check if id is correctly extracted
//     try {
//       const getone = await Events.findById(id);
//       if (!getone) {
//         return res.status(404).json({ message: 'Event not found' });
//       }
//       res.json(getone);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   };
module.exports = {
    addEvent,Getevent,singleEvent
};
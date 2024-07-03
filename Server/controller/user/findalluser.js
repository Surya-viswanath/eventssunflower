
const Usereve = require ("../../modal/User.js");
const allUsers = async (req, res) => {
  const collectionList = await Usereve.find();
  res.json(collectionList);
};



const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedList = await Usereve.findByIdAndDelete(id);
    if (!deletedList) {
      return res.status(404).json({ message: "List not found" });
    }
    res.json({ message: "List deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {allUsers,deleteUser};

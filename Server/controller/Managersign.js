
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Evemanager = require('../modal/Managerschema');



const managerSignup = async (req, res) => {
    const { Name, Email, Password, Phone } = req.body;

    // Check if the password is greater than 6 characters long
    if (Password.length <= 6) {
        return res.status(400).json({ error: 'Password must be greater than 6 characters' });
    }

    const existingClient = await Evemanager.findOne({ Email });

    if (existingClient) {
        return res.status(400).json({ error: 'Email already exists' });
    } else {
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(Password, salt);

        const clientdetails = await Evemanager.create({
            Name,
            Email,
            Password: hashedpassword,
            Phone
        });

        res.json({
            Id: clientdetails._id,
            Name: clientdetails.Name,
            Email: clientdetails.Email,
            Password: clientdetails.Password,
            Phone: clientdetails.Phone,
            Token: tokengenerate(clientdetails._id),
        });
    }
};

const tokengenerate = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    });
};

const getmanager = async (req, res) => {
    const clientdata = await Evemanager.find();
    res.json(clientdata);
};

const deletemanager = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedclient = await Evemanager.findByIdAndDelete(id);
        if (!deletedclient) {
            return res.status(404).json({ message: "List not found" });
        }
        res.json({ message: "List deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { managerSignup, getmanager,deletemanager };
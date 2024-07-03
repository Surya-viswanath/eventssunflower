
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const EveAdmin = require('../modal/Adminschema');

const adminSignup = async (req, res) => {
    const { Name, Email, Password, Phone } = req.body;

    // Check if the password is greater than 6 characters long
    if (Password.length <= 6) {
        return res.status(400).json({ error: 'Password must be greater than 6 characters' });
    }

    const existingClient = await EveAdmin.findOne({ Email });

    if (existingClient) {
        return res.status(400).json({ error: 'Email already exists' });
    } else {
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(Password, salt);

        const clientdetails = await EveAdmin.create({
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

const getAdmin = async (req, res) => {
    const clientdata = await EveAdmin.find();
    res.json(clientdata);
};



module.exports = { adminSignup, getAdmin};
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const Client = require('../modal/Clientschema');


const jwttoken = async (req, res) => {
    const { Name, Email, Password, Place, Phone, Profile } = req.body;

    try {
        
        const newUser = await Client.create({
            Name, Email, Password, Place, Phone, Profile
        });

       
        const token = genToken(newUser._id);

        res.json({
            newUser,
            token
        });
    } catch (error) {
       
        console.error(error);
        res.status(500).json({ error: 'Failed to create user or generate token' });
    }
}


const genToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRETCODE, {
        expiresIn: '1d',
    });
}

module.exports = jwttoken;
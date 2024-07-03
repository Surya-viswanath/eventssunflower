
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const Client = require('../modal/Clientschema');

// const clientSignup = async (req, res) => {
//     const { Name, Email, Password, Phone } = req.body;

//     // Check if the password is greater than 6 characters long
//     if (Password.length <= 6) {
//         return res.status(400).json({ error: 'Password must be greater than 6 characters' });
//     }

//     const existingClient = await Client.findOne({ Email });

//     if (existingClient) {
//         return res.status(400).json({ error: 'Email already exists' });
//     } else {
//         const salt = await bcrypt.genSalt(10);
//         const hashedpassword = await bcrypt.hash(Password, salt);

//         const clientdetails = await Client.create({
//             Name,
//             Email,
//             Password: hashedpassword,
//             Phone
//         });

//         res.json({
//             Id: clientdetails._id,
//             Name: clientdetails.Name,
//             Email: clientdetails.Email,
//             Password: clientdetails.Password,
//             Phone: clientdetails.Phone,
//             Token: tokengenerate(clientdetails._id),
//         });
//     }
// };

// // const tokengenerate = (id) => {
// //     return jwt.sign({ id }, process.env.JWT_SECRET, {
// //         expiresIn: '1d',
// //     });
// // };
// const tokengenerate = (id) => {
//     try {
//         return jwt.sign({ id }, process.env.JWT_SECRET, {
//             expiresIn: '1d',
//         });
//     } catch (error) {
//         console.error("Token generation failed: ", error);
//         return null;
//     }
// };

// const getclient = async (req, res) => {
//     const clientdata = await Client.find();
//     res.json(clientdata);
// };

// const deleteclient = async (req, res) => {
//     const id = req.params.id;
//     try {
//         const deletedclient = await Client.findByIdAndDelete(id);
//         if (!deletedclient) {
//             return res.status(404).json({ message: "List not found" });
//         }
//         res.json({ message: "List deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// module.exports = { clientSignup, getclient, deleteclient };

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Client = require('../modal/Clientschema');

const clientSignup = async (req, res) => {
    const { Name, Email, Password, Phone } = req.body;

    if (Password.length <= 6) {
        return res.status(400).json({ error: 'Password must be greater than 6 characters' });
    }

    const existingClient = await Client.findOne({ Email });

    if (existingClient) {
        return res.status(400).json({ error: 'Email already exists' });
    } else {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(Password, salt);

        const clientDetails = await Client.create({
            Name,
            Email,
            Password: hashedPassword,
            Phone
        });

        const token = tokengenerate(clientDetails._id);
        if (!token) {
            return res.status(500).json({ error: 'Token generation failed' });
        }
        console.log(token);
        res.json({
            Id: clientDetails._id,
            Name: clientDetails.Name,
            Email: clientDetails.Email,
            Password: clientDetails.Password,
            Phone: clientDetails.Phone,
            Token: token,
        });
    }
};

const tokengenerate = (id) => {
    try {
        return jwt.sign({ id }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });
    } catch (error) {
        console.error("Token generation failed: ", error);
        return null;
    }
};

const getclient = async (req, res) => {
    const clientData = await Client.find();
    res.json(clientData);
};

const deleteclient = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedClient = await Client.findByIdAndDelete(id);
        if (!deletedClient) {
            return res.status(404).json({ message: "Client not found" });
        }
        res.json({ message: "Client deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { clientSignup, getclient, deleteclient };
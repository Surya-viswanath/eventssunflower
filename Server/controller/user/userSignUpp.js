


// const bcrypt = require('bcrypt');
// const Usereve = require("../../modal/User");

// const userSignUp = async(req, res) => {
//     const { firstname, lastname, email, password } = req.body;

//     // Basic validation
//     if (!firstname || !lastname || !email || !password) {
//         return res.status(400).json({ error: 'All fields are required' });
//     }

//     try {
//         const existingCustomer = await Usereve.findOne({ email });
//         if (existingCustomer) {
//             return res.status(400).json({ error: 'Email already exists' });
//         }

//         // const salt = await bcrypt.genSalt(10);
//         // const hashedPassword = await bcrypt.hash(password, salt);

//         const customerDetails = await Usereve.create({
//             firstname,
//             lastname,
//             email,
//             password,
//         });

//         res.status(201).json(customerDetails);
//     } catch (error) {
//         console.error('Error creating user:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// module.exports = userSignUp;


const Usereve = require("../../modal/User");

const userSignUp = async(req, res) => {
    const { firstname, lastname, email, password } = req.body;

    // Basic validation
    if (!firstname || !lastname || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const existingCustomer = await Usereve.findOne({ email });
        if (existingCustomer) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const customerDetails = await Usereve.create({
            firstname,
            lastname,
            email,
            password,  // Storing plain text password (not recommended)
        });

        console.log('User created successfully:', customerDetails);
        res.status(201).json(customerDetails);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = userSignUp;
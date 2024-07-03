

const bcrypt = require('bcrypt');
const Usereve = require('../../modal/User.js');
const userSignIn = async (req, res) => {
   // console.log('Received login request with:', req.body); // Log the received data
   try {
       const { email, password } = req.body;

       // Check if all required fields are present
       if (!email || !password) {
           console.log('Missing email or password');
           return res.status(400).json({ message: 'Email and password are required' });
       }

       // Find the user by email
       const existingUser = await Usereve.findOne({ email });
      //  console.log('Found user:', existingUser);
       if (!existingUser) {
           console.log('User not found');
           return res.status(400).json({ message: 'Invalid email or password' });
       }

       // Compare the provided password with the hashed password
       const isPasswordValid = await bcrypt.compare(password, existingUser.password);
      //  console.log('isPasswordValid:', isPasswordValid); // Log the result of password comparison
       if (!isPasswordValid) {
           console.log('Invalid password');
           return res.status(400).json({ message: 'Invalid email or password' });
       }

       // Exclude the password from the user object
       const userResponse = { ...existingUser.toObject(), password: undefined };

       // Respond with the user data
       res.status(200).json({ user: userResponse });
   } catch (error) {
       console.error('Error during user sign in:', error);
       res.status(500).json({ message: 'Internal server error' });
   }
};

module.exports = userSignIn;
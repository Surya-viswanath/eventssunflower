// import User from "../../models/Users.js"
// const Usereve = require("../../modal/User");
// const addUser = async(user)=>{
//     const NewUser = new Usereve(user)
//     try{
//         const cursor = await NewUser.save()
//         return cursor
//     } catch(err){
//         if (err.code=11000) {
//             const error = new Error('Email Aready Exists')
//             error.status = 404
//             throw error
//         }
//         throw new Error(err)
//     }
// }

// module.exports =  addUser



// const Usereve = require('../../modal/User');
//  // Adjust the import path as per your project structure

// const addUser = async (userData) => {
//   try {
//     const newUser = new Usereve(userData);
//     const savedUser = await newUser.save();
//     return savedUser;
//   } catch (error) {
//     throw error; // Handle or log the error as needed
//   }
// };
// module.exports =  addUser



const User = require("../../modal/User"); // Adjust the import path as necessary

const addUser = async (userData) => {
  try {
    const { firstname, lastname, email, password } = userData;

    // Validate if all required fields are present
    if (!firstname || !lastname || !email || !password) {
      throw new Error("All fields are required");
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("Email already exists");
    }

    // Create a new user instance
    const newUser = new User({
      firstname,
      lastname,
      email,
      password, // Hash password before saving to database
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    return savedUser;
  } catch (error) {
    throw error;
  }
};

module.exports = addUser;
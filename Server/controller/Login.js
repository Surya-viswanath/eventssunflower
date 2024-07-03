const bcrypt = require('bcrypt');
const Client = require('../modal/Clientschema');



const login=async(req,res) => {
    const {Email,Password}=req.body
    const existingemail=await Client.findOne({Email})
    if (existingemail){
       if(existingemail.Email ===Email && (await bcrypt.compare(Password,existingemail.Password))){
       res.send("login successful");
       }
       else{
        res.send("login failed");
       }
    }
    else{
        console.log("no data in db");
        res.json("no data in db");
    }
}
   module.exports = login
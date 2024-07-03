const jwt=require('jsonwebtoken');
const Client = require('../modal/Clientschema');
// const Client = require('./Clientschema');

const Createclient=async(req,res)=>{
    const {Name,Email,Password}=req.body;
    const clientdata=await Client.findOne({Email});

    if(Userdata){
        res.json("already exist");
    }
    else{
        const clientdetails=await Client.create({
            Name,Email,Password
        })
        res.json({
            Id:clientdetails._id,
            Name:clientdetails.Name,
            Email:clientdetails.Email,
            Password:clientdetails.Password,
            Token:tokengenerate(clientdetails._id),
        })
    }
}
const tokengenerate=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'1d',
    })
}
module.exports =Createclient;
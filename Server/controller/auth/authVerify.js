// import "dotenv/config";
// import jwt from "jsonwebtoken";
// import User from "../../../models/Users.js";
// import Usereve from "../../modal/User";
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usereve = require("../../modal/User");

const authVerify = async(req, res) => {
    if (!req.body.token) {
        return res.status(401).send({message: 'unAuthorized ss access'})
    }
    const token = req.body.token
    try {
        const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN)
        if (decoded) {
            const email = decoded.email
            const query = {
                email:email
            }
            const reqUser = await Usereve.findOne(query)
            res.send(reqUser)
        } else{
            res.status(401).send({ message: "unauthorized access" });
        }
    } catch (err) {
        return res.status(401).send({ message: "unauthorized access" });
    }
};

module.exports = {
    authVerify
  };

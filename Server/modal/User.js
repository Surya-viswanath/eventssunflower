
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    name: { type: String, default: function() { return this.firstname; } },
    phone: { type: String },
    email: { type: String, required: true, unique: true },
    image: { type: String, default: 'https://i.ibb.co/0XQDTZ1/user.png' },
    cover: { type: String, default: 'https://i.ibb.co/SBJcwSg/cover.png' },
    address: { type: String },
    city: { type: String },
    country: { type: String },
    bio: { type: String },
    role: { type: String, enum: ['admin', 'organizer', 'user'], default: 'user' },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
}, { versionKey: false });

const Usereve = mongoose.model('Usereve', userSchema);

module.exports = Usereve;
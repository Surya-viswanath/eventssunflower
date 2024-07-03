const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
}, { versionKey: false }); 

const Contacteve = mongoose.model('Contacteve', contactSchema);

module.exports= Contacteve;


const mongoose = require('mongoose');

const eventSchema =mongoose.Schema({
    Email :{ type: String, required: true},
   Time:{ type: String, required: true},
  Type:{ type: String, required: true},
  Place:{ type: String,required:true},
    Date:{ type: String, required: true}
});

const Eventt = mongoose.model('Eventt', eventSchema);

module.exports = Eventt;
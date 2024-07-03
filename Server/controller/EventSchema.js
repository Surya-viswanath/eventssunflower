const mongoose = require('mongoose');

const eventSchema =mongoose.Schema({
    Email :{ type: String, required: true,unique: true},
   Time:{ type: String, required: true},
  Type:{ type: String, required: true},
  Place:{ type: String,required:true},
    Date:{ type: String, required: true}
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;



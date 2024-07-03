



const mongoose = require('mongoose');

const EventSchema =mongoose.Schema({
    'title' : {type: String, required: true},
        'type' : {type: String, required: true},
        'location': {type: String, required: true},
        'speakers': {type: String, required: true},
        'sponsor': {type: String, required: true},
        'description': {type: String, required: true},
        'seat':{type: String, required: true},
        'image' : {type: String, required: true,
            default: 'https://placehold.co/650x400/png'
        },
        'date': {type: Date, required: true},
        'createdAt': { type: Date, default: new Date()},
         'email' : {type: String, required: true},
},
{versionKey: false}
);

const Events = mongoose.model('Events', EventSchema);

module.exports = Events;



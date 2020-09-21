const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TimeOffRequest = new Schema({
    name: {
        type: String,
        // required: "Make Sure a Name is input"
    },
    created: { type: Date, required: true, default: Date.now() },
    day: String,
    type: String,
    shift: String
});

module.exports = mongoose.model('TimeOffRequest', TimeOffRequest);
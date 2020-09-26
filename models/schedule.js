const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Schedule = new Schema({
    week: Number,
    monday: [
        {
             
        }
    ],
    tuesday: [
        {
             
        }
    ],
    wednesday: [
        {
             
        }
    ],
    thursday: [
        {
             
        }
    ],
    friday: [
        {
             
        }
    ],
    saturday: [
        {
             
        }
    ],
    sunday: [
        {
             
        }
    ]
});

module.exports = mongoose.model('Schedule', Schedule);
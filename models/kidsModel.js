const mongoose = require('mongoose');


const kidsSchema = mongoose.Schema({
    _id:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    retail_price: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('kids', kidsSchema)
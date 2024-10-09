const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: Number,
    name: String,
    contact_number: Number,
    purpose: String,
    image: String,
    area_type: String,
    pincode: Number,
    address: String,
    property_type: String
});

module.exports = mongoose.model("Property", schema,"properties");
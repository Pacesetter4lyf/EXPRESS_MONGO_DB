const mongoose = require('mongoose');
const basicSchema = new mongoose.Schema({
    email: String,
    firstName: String, 
    lastName: String,
    age: Number,
    hasCar: Boolean,
    country: String
})

const person =  mongoose.model('basic', basicSchema)

module.exports = person;
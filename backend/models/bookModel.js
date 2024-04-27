const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
 title: {
    type: String,
    required: true
 },
 author: {
    type: String,
    required: true
 },
 publisher: {
    type: Number,
    required: true
 },

}, {timestamps: true})

module.exports = mongoose.model('Book', bookSchema)







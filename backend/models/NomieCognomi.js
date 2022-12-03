const mongoose = require('mongoose')

const Schema = mongoose.Schema

const nomeecognomeSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Name2: {
        type: String
    },
    Surname: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required:true
    },
    Rating: {
        type: Number,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model('Nomeecognome', nomeecognomeSchema)


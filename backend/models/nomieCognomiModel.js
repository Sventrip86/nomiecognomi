const mongoose = require('mongoose')

const Schema = mongoose.Schema

const nomeecognomeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    name2: {
        type: String
    },
    surname: {
        type: String,
        required: true
    },
    category: {
        type: [String],
        required:true
    },
    rating: {
        type: Number,
        required: true
    },
    comment:{
        type: String
    }
}, { timestamps: true })


module.exports = mongoose.model('Nomeecognome', nomeecognomeSchema)


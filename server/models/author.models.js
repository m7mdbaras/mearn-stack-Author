const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            'Must have name'
        ],
        minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
    },
}, { timestamps: true })

module.exports.Author = mongoose.model('Author', AuthorSchema)
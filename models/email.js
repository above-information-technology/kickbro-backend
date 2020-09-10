const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema;

const emailSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    validate(email) {
        if (!validator.isEmail(email)) {
            throw new Error("Invalid email")
        }
    },
    lowerEmail: {
        type: String,
        required: true
    }
})

const Email = mongoose.model('Email', emailSchema);

module.exports = Email
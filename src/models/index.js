const mongoose = require("mongoose")

const filmSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    actor: {
        type: String,
    },
    watched: {
        type: Boolean,
        required: true,
        default: false,
    },
})

const Film = mongoose.model("Film", filmSchema)

/*
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
})

const */


module.exports = {Film}
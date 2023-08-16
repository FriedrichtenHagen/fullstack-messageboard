const mongoose = require("mongoose")

const Schema = mongoose.Schema

const messageModelSchema = new Schema({
    text: {
        type: String, 
        required: true, 
        min: 1,
        max: 140,
    }
})
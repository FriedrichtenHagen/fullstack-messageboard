const mongoose = require("mongoose")
const Schema = mongoose.Schema

export const userModelSchema = new Schema({
    name: {
        type: String,
        required: true,
    }
})
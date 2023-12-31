const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    }, 
})

export const UserModel = mongoose.model("User", userSchema)
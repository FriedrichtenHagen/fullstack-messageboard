const mongoose = require("mongoose")
const { UserModel} = require("./users")

const Schema = mongoose.Schema

const messageSchema = new Schema({
    text: {
        type: String, 
        required: true, 
        min: 1,
        max: 140,
    }, 
    user: {
        type: Schema.Types.ObjectId,
        ref: User,
    }, 
    date: {
        type: Date, 
        required: true, 
    }
})
export const MessageModel = mongoose.model("Message", messageSchema)





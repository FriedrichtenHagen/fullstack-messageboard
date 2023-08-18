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



// controllers

async function addMessageToDatabase({name, message}){

    // check if user already exists???
    // user name must be unique
    let user_instance = new UserModel(
        {
            name: name,
        }
    )
    
    
    let message_instance = new MessageModel(
        {
        text: message,
        user: user_instance._id,
        date: new Date(),
        }
    )
    
    await message_instance.save()
}


async function getMessagesFromDatabase(){    
    // sort messages by date descending
    // limit to (the first) 10
    const query = await MessageModel.find()
    .sort({ date: -1})
    .limit(10)
    .exec()

    return query
}
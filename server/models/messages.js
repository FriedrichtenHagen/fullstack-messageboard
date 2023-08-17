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


async function addMessageToDatabase({name, message}){
    let message_instance = new messageModelSchema({text: message})
    
    await message_instance.save()
}
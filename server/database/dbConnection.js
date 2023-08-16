const mongoose = require("mongoose")
mongoose.set("strictQuery", true)
require('dotenv').config()


const mongoURI = process.env.MONGO_URI


main().catch((err) => console.log(err));

export async function dbConnection() {
    try{
        await mongoose.connect(mongoURI);
        console.log("Connection to db successful")
    }
    catch(err){
        console.error(err)
    }
}
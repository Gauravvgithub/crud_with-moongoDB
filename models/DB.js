const mongoose = require("mongoose")

const connectDB = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://admin:admin123@cluster0.2efopbe.mongodb.net/Employee?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Database connected succesfully")
    } catch (error){
        console.log(`something went wrong ${error}`)
    }
}

module.exports = connectDB
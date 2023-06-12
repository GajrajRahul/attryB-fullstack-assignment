const mongoose = require("mongoose")
const mongoURI = "mongodb://localhost:27017/carDekhoBecho"

const connectDb = async () => {
    try {
        await mongoose.connect(mongoURI)
        console.log("Database Connected")
    } catch (error) {
        console.log("Error : ", error.message)
    }
}

module.exports = connectDb
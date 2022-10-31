const mongoose = require('mongoose')
const dotenv = require('dotenv')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connect Success`.bgMagenta);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB
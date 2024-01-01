const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI).then(function () {
            console.log('MongoDB Connected...');
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;
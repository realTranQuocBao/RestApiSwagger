const mongoose = require('mongoose');
require("dotenv").config()

const connectDB = async () => {
    try {
        // console.log("process.env.MONGO_URI", process.env.MONGO_URI);
        // console.log("process.env.MONGO_URI_bao", process.env.MONGO_URI_bao);
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useFindAndModify: false,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch(err) {
        console.log("Lỗi cmnr:", err);
        process.exit(1);
    } 

}

module.exports = connectDB;
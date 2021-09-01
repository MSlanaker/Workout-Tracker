const mongoose = require("mongoose");
require('dotenv/config');

const dbConnect = process.env.MONGODB_URI;

async function connectDB(){
    await mongoose.connect(dbConnect,{
        useNewUrlParser: true,
        useUnifiedTopology: true  
    }, () =>  
    console.log("Connected to DB")
  );
  }

module.exports = connectDB;
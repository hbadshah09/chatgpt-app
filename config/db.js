const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017");
    console.log(
      `Connected To Mongodb Database ${mongoose.connection.host}`.bgGreen.white
    );
  } catch (error) {
    console.log(`Mognodb Database Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;

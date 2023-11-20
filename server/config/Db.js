const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const Db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected succesfully");
  } catch (err) {
    console.log("Error connecting to DB", err);
  }
};

module.exports = Db;
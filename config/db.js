const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log("MongoDB Connected");
  } catch (err) {
    console.log("MongoDB Connection Error:");
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
import mongoose from "mongoose";
const dbUrl =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mern-chat-app";
export default async function connectToMongoDB() {
  try {
    await mongoose.connect(dbUrl);
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("error connecting to MongoDB: ", error.message);
  }
}

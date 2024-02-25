import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./db/connectToMongoDB.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log("Server is running on port 3000");
});

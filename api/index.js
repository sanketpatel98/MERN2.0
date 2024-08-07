import cookieParser from "cookie-parser";
import cors from 'cors';
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.route.js";
import commentRoute from "./routes/comment.route.js";
import postRoutes from "./routes/post.route.js";
import userRoutes from "./routes/user.route.js";


dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is connected!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

const corsConfig = {
    credentials: true,
    origin: "https://mern-2-0-jhwx.vercel.app",
    // origin: "http://localhost:5173"
};
app.use(cors(corsConfig));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://mern-2-0-jhwx.vercel.app');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');   

  next();
});

app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.send();
});
// app.options('*', cors(corsConfig)); // Handle preflight requests

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoute);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error!";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

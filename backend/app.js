import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";
import cors from "cors";

const app = express();
app.use(cors());  
app.use(express.json());
app.use("/api/user",router)
app.use("/api/blog",blogRouter)

mongoose
  .connect(
    "mongodb+srv://mm2725:mm2725@cluster0.ud8jj8a.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5001))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));


  //mongodb+srv://mm2527:mm2527@blogwebsite.ur8bcx3.mongodb.net/?retryWrites=true&w=majority
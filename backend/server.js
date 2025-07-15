import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import 'dotenv/config'
import connectDB from "./db/index.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminroute.js";

const app = express();
const port = process.env.port || 8000
connectDB()
connectCloudinary()

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16KB" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes

//api endpoints
app.use('/api/admin',adminRouter)

app.get('/',(req,res)=>{
  res.send("Api WOrking gr8")
})

app.listen(port, ()=> console.log("Server Started", port))

export default app
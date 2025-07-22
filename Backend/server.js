import "dotenv/config";
import express, { application } from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudnary.js";
import adminRouter from "./routes/adminRoute.js";

import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/usersRoute.js";

//app config

const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

//middlewares
app.use(express.json());
app.use(cors());

//api end points
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello I am working Dude 😎");
});

app.listen(port, () => console.log(`\nserver is running on ${port}`));

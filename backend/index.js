import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({ message: "backend api is working! hooray!" })
})

app.listen(5000, () => {
    console.log(`Server is running on port 3000`);
});

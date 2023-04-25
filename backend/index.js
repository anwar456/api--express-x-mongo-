import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productRoute from "./routes/productRoute.js";

const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/tugas-crud", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database connection..."));

app.use(cors());
app.use(express.json());
app.use(productRoute);

app.listen(5000, () => console.log("Server running..."));

import express from "express";
import mongoose from "mongoose";
import { todoRouter } from "./controller.js";
import cors from "cors"

const app = express();
const USER_NAME = 'andreykovalenko241';
const USER_PASS = "sG0CrZGn1LdMqSVi";
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type'
}

mongoose.connect(
    `mongodb+srv://${USER_NAME}:${USER_PASS}@todo.xnmdeyt.mongodb.net/?retryWrites=true&w=majority&appName=todo`,
);

const db = mongoose.connection;

db.on("error", (error) => {
    console.log(`Connection error: ${JSON.stringify(error)}`);
});
db.on("open", () => {
    console.log("Connected to MongoDB");
});

app.use(cors(corsOptions))
app.use(express.json());;
app.use("/", todoRouter);

export { app };
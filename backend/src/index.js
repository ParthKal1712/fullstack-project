// Importing all Environment Variables
import dotenv from "dotenv";

// Importing important libraries
import mongoose from "mongoose";
import express from "express";

// Import Database connection from the db folder
import connectDB from "../db/index.js";

// Importing Database Name from Constants
import { DB_NAME } from "./constants.js";

// Initializing express app
const app = express();

// Async function to try and connect to the Mongoose Database. If it fails, it will throw an error
(async () => {
    try {
        // Connect to Mongoose
        console.log(process.env.MONGODB_URL);
        mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        });
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port: ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("ERROR: ", error);
        throw error;
    }
})();

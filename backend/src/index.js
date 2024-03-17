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
connectDB()
    .then(() => {
        console.log("Connected");
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server running at port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(`MongoDB Connection Failed. Error: ${error}`);
    });

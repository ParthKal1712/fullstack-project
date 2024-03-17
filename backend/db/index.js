// Importing important libraries
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

// Importing Database Name from Constants
import { DB_NAME } from "../src/constants.js";

// Initializing express app
const app = express();

const connectDB = async () => {
    try {
        // Connect to Mongoose (returns Connection Object)
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URL}/${DB_NAME}`
        );

        console.log(
            `Connected to MongoDB. DB Host: ${connectionInstance.connection.host}`
        );

        // If there is an error, throw it
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        });
    } catch (error) {
        // Print the error
        console.log(`ERROR: ${error}`);

        // Exit with error code 1
        process.exit(1);
    }
};

// Exporting connectDB function
export default connectDB;

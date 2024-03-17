// Import important libraries
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Create Express App
const app = express();

// Using Middlewares

// Enable CORS
app.use(cors());

// Enable cookies (Allow requests coming from CORS_ORIGIN only)
app.use(
    cookieParser({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

// Enable Express to receive JSONS (size limit 20 kb)
app.use(express.json({ limit: "20kb" }));

// Enable Express to receive URL encoded data
app.use(express.urlencoded({ extended: true, limit: "20kb" }));

// Serve static files to "public" folder
app.use(express.static("public"));

// Use cookieParser to manipulate cookies
app.use(cookieParser());

// Export Express App
export { app };

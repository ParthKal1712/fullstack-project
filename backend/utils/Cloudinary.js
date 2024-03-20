// Import Essential Libraries
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";

// Confiuring Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Create user-facing function to upload the file on Cloudinary
const uploadOnCloudinary = async (localFilePath) => {
    try {
        // If localFilePath has a falsy value, return null
        if (!localFilePath) return null;

        // Upload the file on Cloudinary and get the response
        const response = cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });

        // File Uploaded Successfully
        console.log(`File Uploaded on Cloudinary. URL: ${response.url}`);

        // Send the response to the user
        return response;
    } catch (err) {
        // If the file upload fails, delete the local copy of the file saved in the server
        fs.unlinkSync(localFilePath);
        return null;
    }
};

import mongoose, { Schema } from "mongoose";

const employeeSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
    },
    phoneNo: {
        type: String,
        required: true,
        trim: true,
    },
    photo: {
        type: String, // Cloudinary URL
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    aadhaarNo: {
        type: String,
        required: true,
        trim: true,
    },
    address,
});

export const Employee = mongoose.model("Employee", employeeSchema);

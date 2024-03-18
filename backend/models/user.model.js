import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        passowrd: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        avatar: {
            type: String, // Cloudinary URL
            required: true,
        },
        pageAccess: [
            {
                pageName: {
                    type: String,
                },
                accessRight: {
                    type: String,
                },
            },
        ],
        refreshToken: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

// Write a "pre" function that runs before saving the document (to encrypt incoming passwords and decrypt outgoing passwords)
userSchema.pre("save", async function (next) {
    // Check if the password has been modified
    if (this.isModified("password")) {
        // Access the password field and encrypt it
        this.passowrd = bcrypt.hashSync(this.passowrd, 10);
    }
    // Go to the next stage
    next();
});

// Under methods, write a function that checks if the password is correct
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.passowrd);
};

userSchema.methods.generateAccessToken = async function () {
    jwt.sign(
        {
            _id: this._id,
            username: this.fullName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
    );
};

userSchema.methods.generateRefreshToken = async function () {
    jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        }
    );
};

export const User = mongoose.model("User", userSchema);

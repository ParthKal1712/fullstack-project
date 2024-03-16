// Importing important libraries
import mongoose from "mongoose";

// Importing Database Name from Constants
import { DB_NAME } from "../src/constants.js";

const connectDB = async () => {
    try {
        // Connect to Mongoose (returns Connection Object)
        const connectionInstance = mongoose.connect(
            `${process.env.MONGODB_URL}/${DB_NAME}`
        );

        // If there is an error, throw it
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        });

        // Start listening on the specified port
        app.listen(process.env.PORT, () => {
            console.log(
                `App is listening on port: ${process.env.PORT}. DB Host: ${connectionInstance.connection.host}`
            );
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

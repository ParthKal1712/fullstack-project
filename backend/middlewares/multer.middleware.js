import { multer } from "multer";

// Define storage object
const storage = multer.diskStorage({
    // Set the destination of the file to the public/temp folder temporarily
    destination: function (req, file, cb) {
        cb(null, "./public/temp");
    },
    // Set the file name as the original name + a unique suffix
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.originalname + "-" + uniqueSuffix);
    },
});

// Export "upload" function, giving access to the storage object
const upload = multer({ storage });

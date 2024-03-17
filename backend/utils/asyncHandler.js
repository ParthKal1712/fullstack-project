// Wrapper function to handle async requests and send out errors in a specific format
const asyncHandler = (fn) => {
    // The input function will contain 3 arguments
    (req, res, next) => {
        // When this function runs, it will return a Promise
        Promise
            // If the Promise is fulfilled, it will run the input function
            .resolve(fn(req, res, next))
            // If the Promise is rejected, it will throw out the error to the enxt stage
            .catch((err) => {
                next(err);
            });
    };
};

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (err) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message,
//         });
//     }
// };

export { asyncHandler };

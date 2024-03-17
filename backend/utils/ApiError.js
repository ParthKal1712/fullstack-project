// Extend the default Error class to use its features
class ApiError extends Error {
    // Create a constructor to define the properties of the ApiError
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
        // Call super to inherit the properties of the Error class
        super();

        // Set the statusCode and message properties of the object
        this.statusCode = statusCode;
        this.message = message;

        // Empty out the data field
        this.data = null;

        // Set the success flag to flase (if anyone is consuming it)
        this.success = false;

        // Set the errors property of the object as thrown by the caller
        this.errors = errors;

        // If there is a stack object, set its stack from the caller
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };

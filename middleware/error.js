import ErrorResponse from "../utils/ErrorResponse.js";

/**
 * Middleware function to catch errors.
 *
 * @param {Error | ErrorResponse} err Error object thrown by middleware
 * @param {Request} req Express request object
 * @param {Response} res Express response object
 * @param {NextFunction} next Express next function
 */
export default function errorHandler(err, req, res, next) {
  let error = { ...err };

  error.message = err.message;

  console.log(err);

  // Bad ObjectId error
  if (err.name === "CastError") {
    const message = "Resource not found";
    error = new ErrorResponse(message, 400);
  }

  // Unique field has duplicate value
  if (err.code === 11000) {
    const message = "Entered a duplicate value for a unique field.";
    error = new ErrorResponse(message, 400);
  }

  // Error during schema validation
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
    error = new ErrorResponse(message, 400);
  }

  // Send error response
  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message,
  });
}

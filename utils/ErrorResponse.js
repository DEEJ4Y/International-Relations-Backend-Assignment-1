/**
 * Custom class for creating error responses
 */
export default class ErrorResponse extends Error {
  statusCode;

  /**
   * @param {string} message Custom response error message
   * @param {number} statusCode HTTP status code for response
   */
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

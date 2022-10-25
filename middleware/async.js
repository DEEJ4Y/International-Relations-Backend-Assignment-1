/**
 * A function to catch errors thrown by async middleware.
 *
 * @param fn An asynchrounous function
 * @returns A promise with error handling
 */
export default function asyncHandler(fn) {
  return function (req, res, next) {
    return Promise.resolve(fn(req, res, next)).catch(next);
  };
}

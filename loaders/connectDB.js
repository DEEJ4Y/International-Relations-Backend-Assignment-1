import mongoose from "mongoose";

/**
 * A function to connect to the database
 */
export default function connectDB() {
  const MONGO_URI = process.env.MONGO_URI;
  mongoose.connect(MONGO_URI, (err, conn) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    console.log(`Connected to MongoDB @ ${conn.host}`);
  });
}

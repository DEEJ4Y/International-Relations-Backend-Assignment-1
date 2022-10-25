import express from "express";

// Config
import dotenv from "dotenv";

// Loaders
import connectDB from "./loaders/connectDB.js";
import APIs from "./routes/index.js";
import errorHandler from "./middleware/error.js";

// Initialize config
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Serve static files
app.use(express.static("public"));

// Read JSON
app.use(express.json());

// Load APIs
APIs(app);

// Default route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is up and running.",
  });
});

// Catch errors
app.use(errorHandler);

// Start express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic endpoint
app.get("/", (req, res) => {
  res.send("Hello, Chalkline!");
});

// API endpoint for client-server test
app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

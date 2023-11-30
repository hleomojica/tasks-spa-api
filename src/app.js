const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require("cors");
app.use(cors());
require('dotenv').config()

// Connect to MongoDB
connectDB();

// Middleware for parsing request bodies
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
 
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my API." });
  });
  
//import routes
require("./routes")(app);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;
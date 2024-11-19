// Require the Express module
const express = require("express");

// Create an Express application
const app = express();

// Define a route that sends a JSON response
app.get("/json", (req, res) => {
  // Define the JSON data to send
  const data = {
    name: "Alex",
    age: 30,
    occupation: "Engineer",
  };

  // Send the JSON response
  res.json(data);
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

const express = require("express");
const app = express();

app.get(
  "/",
  (req, res, next) => {
    console.log("ID:", req.params.id);
    next();
  },
  (req, res, next) => {
    res.send("User Info");
  }
);

// handler for the /user/:id path, which prints the user ID
app.get("/user/:id", (req, res, next) => {
  res.send(req.params.id);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

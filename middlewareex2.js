const express = require("express");
const app = express();

app.get(
  "/",
  (req, res, next) => {
    // if the user ID is 0, skip to the next route
    if (req.params.id === "0") next("route");
    // otherwise pass the control to the next middleware function in this stack
    else next();
  },
  (req, res, next) => {
    // send a regular response
    res.send("regular");
  }
);

// handler for the /user/:id path, which sends a special response
app.get("/ user/:id", (req, res, next) => {
  res.send("special");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

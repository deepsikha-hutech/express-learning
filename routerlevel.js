const express = require("express");
const app = express();
const router = express.Router();

// predicate the router with a check and bail out when needed
router.use((req, res, next) => {
  if (!req.headers["x-auth"]) return next("router");
  next();
});

router.get("/   ", (req, res) => {
  res.send("hello, user!");
});

// use the router and 401 anything falling through
app.use("/", router, (req, res) => {
  res.sendStatus(401);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

const express = require("express");
const router = express.Router();
const userControllerV1 = require("../controller/v1.users");

// define the home page route
router.get("/", (req, res) => {
  res.send("V1 is Ok");
});
router.use("/users", userControllerV1);

module.exports = router;

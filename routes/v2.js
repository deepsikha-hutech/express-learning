const express = require("express");
const router = express.Router();
const userControllerV2 = require("../controller/v2.users");

// define the home page route
// router.use("/users", userControllerV2);

// module.exports = router;

router.get("/", (req, res) => {
  res.send("V2 is Ok");
});
router.use("/users", userControllerV2);

module.exports = router;

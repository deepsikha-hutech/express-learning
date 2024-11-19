const express = require("express");
const router = express.Router();
const userV1Utils = require("../utils/v1.users");

// define the home page route
router.get("/", (req, res) => {
  try {
    const { statusCode, ...response } = userV1Utils?.getAllUser();
    res.status(statusCode).json(response);
  } catch (error) {
    res.status(500).json({
      error: [error?.message?.replaceAll("'")],
      message: "Internal Server Error",
    });
  }
});

// define the home page route
router.delete("/delete/:id", (req, res) => {
  const { id, name, dhdhd, jkjaj } = req?.params;
  const { statusCode, ...rest } = userV1Utils?.deleteUser(req?.params?.id);
  res.status(statusCode).json(rest);
});

module.exports = router;

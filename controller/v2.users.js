// const express = require('express')
// const router = express.Router()

// // define the home page route
// router.get('/', (req, res) => {
//   res.send('v2 Users')
// })

// // define the home page route
// router.get('/about', (req, res) => {
//   res.send('about v2 Users')
// })

// module.exports = router

const express = require("express");
const router = express.Router();
const userV1Utils = require("../utils/v2.users");

// define the home page route
router.get("/", (req, res) => {
  try {
    const { statusCode, ...response } = userV2Utils?.getAllUser();
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
  const { id, name, dsdc } = req?.params;
  const { statusCode, ...rest } = userV1Utils?.deleteUser(req?.params?.id);
  res.status(statusCode).json(rest);
});

module.exports = router;

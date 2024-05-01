const express = require("express");
const router = express.Router();

const User = require("../model/userschema");

router.get("/", (req, res) => {
  res.send("this is demo router");
});

module.exports = router;

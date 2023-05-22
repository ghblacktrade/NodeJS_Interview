const express = require("express");
const {getRootPasha} = require("../controllers/root");

const router = express.Router();

router.get('/', getRootPasha);

module.exports = router;
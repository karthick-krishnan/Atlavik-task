'use-strict';
const express = require("express");
const router = express.Router();
const validate = require('./validation/index');
const recordsRoute = require('./routes/records');

//Routes by processing in middleware pattern
router.get("/entries/getData", validate.getRecords, recordsRoute.getRecords);



module.exports = router;
const express = require('express');
const router = express.Router();
const { employeeList } = require('../handlers/employees');

//routes
router.get('/employees', employeeList);

//default export
module.exports = router;

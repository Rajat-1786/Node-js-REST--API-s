const express = require('express');
const addTaskControlle = require('../controller/addTaskController');

const router = express.Router();

router.post('',addTaskControlle.addTask);
router.get('/:projectName',addTaskControlle.getTasks);

module.exports = router;
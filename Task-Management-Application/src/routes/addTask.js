const express = require('express');
const addTaskControlle = require('../controller/addTaskController');

const router = express.Router();

router.post('',addTaskControlle.addTask);
router.get('/:projectId',addTaskControlle.getTasks);

module.exports = router;
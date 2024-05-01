const express = require('express');
const addProjectController = require('../controller/addProjectController');

const router = express.Router();

router.post('', addProjectController.addProject);

router.get('/:email', addProjectController.getProject);

module.exports = router
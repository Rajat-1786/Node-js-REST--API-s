const express = require('express');
const createUser = require('../controller/creatUser');

const router = express.Router();

router.post('',createUser.creatUser);

router.get('/:userID',createUser.getUser)

module.exports = router;
const express = require('express');
const router = express.Router();
const users = require('../controllers/users.controller');
const secure = require('../middleware/secure.mid');

router.get('/', secure.isAuthenticated, users.list);
router.delete('/:id', users.delete);

module.exports = router;
const express = require('express');
const router = express.Router();
const projects = require('../controllers/projects.controller');

router.get('/getProjects', projects.getProjects);

module.exports = router;
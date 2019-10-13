const Projects = require("../data/projects.json");

module.exports.getProjects = (req, res, next) => {
    res.status(201).json(Projects);
}
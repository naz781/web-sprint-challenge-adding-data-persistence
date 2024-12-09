// build your `/api/projects` router here
const express = require('express');
const Project = require('./model');
const router = express.Router();

// GET all projects
router.get('/', async (req, res, next) => {
    try {
        const projects = await Project.getProjects();
        res.status(200).json(projects);
    } catch (err) {
        next(err);
    }
});

// POST a new project
router.post('/', async (req, res, next) => {
    try {
        const newProject = await Project.addProject(req.body);
        res.status(201).json(newProject);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
// build your `Project` model here
const db = require('../../data/dbConfig');

// Get all projects
function getProjects() {
    return db('projects').select('*').then(projects =>
        projects.map(project => ({
            ...project,
            project_completed: !!project.project_completed, // Convert to boolean
        }))
    );
}

// Add a new project
function addProject(project) {
    return db('projects')
        .insert(project)
        .returning('*')
        .then(([newProject]) => ({
            ...newProject,
            project_completed: !!newProject.project_completed, // Convert to boolean
        }));
}

module.exports = { getProjects, addProject };
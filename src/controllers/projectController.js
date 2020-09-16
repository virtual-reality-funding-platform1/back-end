const Proj = require('../models/project_model');

const fetchAll = async (req, res, next) => {
	try {
		const projects = await Proj.fetchAll();

		return res.status(200).json(projects);
	} catch (err) {
		next(err);
	}
};

const fetchByUserID = async (req, res, next) => {
	try {
		const projects = await Proj.fetchProjectsByUserID(req.params.userID);
		res.status(200).json(projects);
	} catch (err) {
		console.log('### Find Project by UserID ERROR');
		next(err);
	}
};

const createProject = async (req, res, next) => {
	try {
		const project = await Proj.insert(req.body);

		return res.status(201).json(project);
	} catch (err) {
		next(err);
	}
};

module.exports = {
	fetchAll,
	fetchByUserID,
	createProject,
};

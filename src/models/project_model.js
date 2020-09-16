const db = require('../../database/config');

function fetchAll() {
	return db('projects');
}

function findById(id) {
	return db('projects').where({ id }).first();
}

async function insert(projectData) {
	const [projectID] = await db('projects')
		.insert(projectData)
		.returning('id');
	return findById(projectID);
}

async function update(projectData, id) {
	await db('projects').update(projectData).where({ id });
	return findById(id);
}

function remove(id) {
	return db('projects').delete().where({ id });
}

function fetchProjectsByUserID(id) {
	return db('user_projects as UP')
		.innerJoin('projects as P', 'p.id', 'UP.projectID')
		.innerJoin('users as U', 'U.id', 'UP.userID')
		.where('UP.userID', id)
		.select(
			'P.id',
			'P.dateCreated',
			'P.goalFundingDate',
			'P.projectTitle',
			'P.projectStory',
			'P.projectHeroImage',
			'P.goalFunding',
			'P.currentFunding',
			'U.id',
			'U.username'
		);
}

module.exports = {
	fetchAll,
	findById,
	insert,
	update,
	remove,
	fetchProjectsByUserID,
};

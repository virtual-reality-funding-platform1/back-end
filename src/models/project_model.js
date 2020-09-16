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

module.exports = {
	fetchAll,
	findById,
	insert,
	update,
	remove,
};

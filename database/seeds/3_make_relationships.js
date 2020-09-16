exports.seed = async function (knex) {
	await knex('user_projects').insert([
		{ projectID: 1, userID: 1 },
		{ projectID: 2, userID: 1 },
		{ projectID: 3, userID: 2 },
		{ projectID: 4, userID: 2 },
	]);
};

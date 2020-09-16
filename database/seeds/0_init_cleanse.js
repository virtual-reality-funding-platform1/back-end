exports.seed = async function (knex) {
	await knex('users').truncate();
	await knex('projects').truncate();
	await knex('user_projects').truncate();
};

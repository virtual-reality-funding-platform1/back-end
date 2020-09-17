exports.seed = async function (knex) {
	await knex('user_projects').truncate();
	await knex('projects').truncate();
	await knex('users').truncate();
};

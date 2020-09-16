exports.up = async function (knex) {
	await knex.schema.createTable('user_projects', (table) => {
		table
			.integer('projectID')
			.unsigned()
			.references('id')
			.inTable('projects')
			.notNullable()
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
		table
			.integer('userID')
			.unsigned()
			.references('id')
			.inTable('users')
			.notNullable()
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
	});
};

exports.down = async function (knex) {
	await knex.schema.dropTableIfExists('user_projects');
};

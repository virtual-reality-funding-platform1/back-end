exports.seed = async function (knex) {
	await knex('users').insert([
		{
			id: 1,
			username: 'usertest1',
			//bananas12!@
			password:
				'$2a$14$GpiQEHMfxhOIUSlOa9Bmu.Pp3mR93DK01VjZCQkLeQGDhwkqxKGM.',
			email: 'test1@gmail.com',
			userRole: 'user',
		},
		{
			id: 2,
			username: 'usertest2',
			//bananas12!@
			password:
				'$2a$14$GpiQEHMfxhOIUSlOa9Bmu.Pp3mR93DK01VjZCQkLeQGDhwkqxKGM.',
			email: 'test2@gmail.com',
			userRole: 'investor',
		},
	]);
};

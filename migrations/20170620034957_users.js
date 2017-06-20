exports.up = function(knex, Promise) {
				return knex.schema.createTable('users', table => {
								table.increments('id');
								table.string('username', [50]);
								table.string('email', [255]);
								table.string('password', [50]);
				});
};

exports.down = function(knex, Promise) {
				return knex.schema.dropTable('users');
};

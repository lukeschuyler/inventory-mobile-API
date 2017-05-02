
exports.up = (knex, Promise) => {
  return knex.schema.createTable('products', (table) => {
    table.increments();
    table.bigInteger('upc_code').unsigned().notNullable().unique();
    table.string('name').notNullable();
    table.string('image');
    table.string('description', 1000).notNullable();
    table.integer('popularity');
  })
  .createTable('inventory_sessions', (table) => {
    table.increments();
    table.timestamp('date').notNullable().defaultTo(knex.fn.now())
    table.string('username')
  })
  .createTable('directors', (table) => {
    table.increments()
    table.string('name').notNullable().unique()
    table.string('gender').notNullable()
    table.integer('birthYear')
    table.string('twitterHandle')
  })
  .createTable('shows_directors', (table) => {
    table.increments()
    table.integer('director_id').unsigned().references('directors.id')
    table.integer('show_id').unsigned().references('shows.id')
  })
};

exports.down = (knex, Promise) => {
  
};

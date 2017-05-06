
exports.up = (knex, Promise) => {
  return knex.schema
  .createTable('products', (table) => {
    table.increments();
    table.bigInteger('upc_code').unsigned().notNullable().unique();
    table.string('name').notNullable();
    table.string('measure').notNullable();
    table.string('image');
    table.string('description', 1000).notNullable();
    table.string('price').notNullable();
    table.integer('popularity');
  })
  .createTable('inventory_sessions', (table) => {
    table.increments();
    table.timestamp('date').notNullable().defaultTo(knex.fn.now())
    table.string('username')
  })
  .createTable('i_session_line_items', (table) => {
    table.increments()
    table.integer('product_id').unsigned().references('products.id')
    table.integer('inventory_session_id').unsigned().references('inventory_sessions.id')
    table.integer('quantity').notNullable();
  })
  .createTable('waste_sessions', (table) => {
    table.increments();
    table.timestamp('date').notNullable().defaultTo(knex.fn.now())
    table.string('username')
  })
  .createTable('w_session_line_items', (table) => {
    table.increments()
    table.integer('product_id').unsigned().references('products.id')
    table.integer('waste_session_id').unsigned().references('waste_sessions.id')
    table.integer('quantity').notNullable();
  })
};

exports.down = (knex, Promise) => knex.schema
  .dropTable('i_session_line_items')
  .dropTable('w_session_line_items')
  .dropTable('products')
  .dropTable('inventory_sessions')
  .dropTable('waste_sessions');

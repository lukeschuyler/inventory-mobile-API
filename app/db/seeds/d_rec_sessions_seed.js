exports.seed = (knex, Promise) => {
  return knex('inventory_sessions').del() 
    .then(() => { 
      return Promise.all([
        knex('inventory_sessions').insert({
          username: "dougiefrsh"
        }),
        knex('inventory_sessions').insert({
          username: "clarkfredo"
        }),
        knex('inventory_sessions').insert({
          username: "clarkfredo"
        }),
        knex('inventory_sessions').insert({
          username: "jesseclardy"
        }),
        knex('inventory_sessions').insert({
          username: "dougiefresh"
        })
      ]);
    });
};

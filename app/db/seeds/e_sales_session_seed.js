exports.seed = (knex, Promise) => {
  return knex('inventory_sessions').del() 
    .then(() => { 
      return Promise.all([
        knex('inventory_sessions').insert({
          username: "frippertron"
        }),
        knex('inventory_sessions').insert({
          username: "shawn123"
        }),
        knex('inventory_sessions').insert({
          username: "jamiethomas"
        }),
        knex('inventory_sessions').insert({
          username: "dsurrett"
        }),
        knex('inventory_sessions').insert({
          username: "dsurrett"
        })
      ]);
    });
};

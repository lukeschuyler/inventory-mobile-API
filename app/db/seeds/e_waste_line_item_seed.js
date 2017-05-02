exports.seed = (knex, Promise) => {
  return knex('w_session_line_items').del() 
    .then(() => { 
      return Promise.all([
        knex('w_session_line_items').insert({
          product_id: 3,
          session_id: 1,
          quantity: 1
        }),
        knex('w_session_line_items').insert({
          product_id: 4,
          session_id: 1,
          quantity: 2
        }),
        knex('w_session_line_items').insert({
          product_id: 5,
          session_id: 2,
          quantity: 1
        }),
        knex('w_session_line_items').insert({
          product_id: 2,
          session_id: 2,
          quantity: 3
        }),
        knex('w_session_line_items').insert({
          product_id: 1,
          session_id: 3,
          quantity: 6
        }),
        knex('w_session_line_items').insert({
          product_id: 3,
          session_id: 3,
          quantity: 9
        }),
        knex('w_session_line_items').insert({
          product_id: 4,
          session_id: 3,
          quantity: 1
        }),
        knex('w_session_line_items').insert({
          product_id: 5,
          session_id: 2,
          quantity: 2
        }),
        knex('w_session_line_items').insert({
          product_id: 2,
          session_id: 2,
          quantity: 4
        })
      ]);
    });
};

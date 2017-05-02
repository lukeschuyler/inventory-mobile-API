exports.seed = (knex, Promise) => {
  return knex('i_session_line_items').del() 
    .then(() => { 
      return Promise.all([
        knex('i_session_line_items').insert({
          product_id: 3,
          session_id: 1,
          quantity: 12
        }),
        knex('i_session_line_items').insert({
          product_id: 4,
          session_id: 1,
          quantity: 19
        }),
        knex('i_session_line_items').insert({
          product_id: 5,
          session_id: 1,
          quantity: 13
        }),
        knex('i_session_line_items').insert({
          product_id: 2,
          session_id: 1,
          quantity: 134
        }),
        knex('i_session_line_items').insert({
          product_id: 1,
          session_id: 1,
          quantity: 1240
        }),
        knex('i_session_line_items').insert({
          product_id: 3,
          session_id: 2,
          quantity: 19
        }),
        knex('i_session_line_items').insert({
          product_id: 4,
          session_id: 2,
          quantity: 16
        }),
        knex('i_session_line_items').insert({
          product_id: 5,
          session_id: 2,
          quantity: 22
        }),
        knex('i_session_line_items').insert({
          product_id: 2,
          session_id: 2,
          quantity: 98
        }),
        knex('i_session_line_items').insert({
          product_id: 1,
          session_id: 2,
          quantity: 1500
        }),
      ]);
    });
};

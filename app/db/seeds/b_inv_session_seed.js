exports.seed = (knex, Promise) => {
  return knex('inventory_sessions').del() 
    .then(() => { 
      return Promise.all([
        knex('inventory_sessions').insert({
          upc_code: 099428829940,
          name: 'Coffee Filters',
          measure: 'QTY',
          image: 'https://www.gianteagle.com/ProductImages/PRODUCT_NODE_375/55437629577.jpg',
          description: 'Single-origin coffee echo park lumbersexual listicle vexillologist pok pok marfa, flexitarian selfies man braid photo booth distillery. Glossier ennui tumeric, literally helvetica williamsburg aesthetic banh mi before they sold out fam knausgaard slow-carb. Williamsburg enamel pin master cleanse +1 unicorn. Waistcoat pitchfork fashion axe, vexillologist coloring book irony tumblr photo booth hoodie flannel. Bushwick kale chips hexagon cornhole. Microdosing butcher flannel pitchfork readymade. Meggings sriracha venmo, tote bag banjo tousled austin polaroid affogato.',
          popularity: 8
        })
      ]);
    });
};

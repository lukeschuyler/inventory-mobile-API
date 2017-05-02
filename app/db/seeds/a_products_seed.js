exports.seed = (knex, Promise) => {
  return knex('products').del() 
    .then(() => { 
      return Promise.all([
        knex('products').insert({
          upc_code: 099428829940,
          name: 'Coffee Filters',
          measure: 'QTY',
          image: 'https://www.gianteagle.com/ProductImages/PRODUCT_NODE_375/55437629577.jpg',
          description: 'Single-origin coffee echo park lumbersexual listicle vexillologist pok pok marfa, flexitarian selfies man braid photo booth distillery. Glossier ennui tumeric, literally helvetica williamsburg aesthetic banh mi before they sold out fam knausgaard slow-carb. Williamsburg enamel pin master cleanse +1 unicorn. Waistcoat pitchfork fashion axe, vexillologist coloring book irony tumblr photo booth hoodie flannel. Bushwick kale chips hexagon cornhole. Microdosing butcher flannel pitchfork readymade. Meggings sriracha venmo, tote bag banjo tousled austin polaroid affogato.',
          popularity: 8
        }),
        knex('products').insert({
          upc_code: 099428829943,
          name: 'Coffee',
          measure: 'QTY',
          image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT8MS9I_0LlTx0Z8412ByEJ2R-xG3BhF6oKNCAU7SfyuYsUIfwV',
          description: 'Single-origin coffee echo park lumbersexual listicle vexillologist pok pok marfa, flexitarian selfies man braid photo booth distillery. Glossier ennui tumeric, literally helvetica williamsburg aesthetic banh mi before they sold out fam knausgaard slow-carb. Williamsburg enamel pin master cleanse +1 unicorn. Waistcoat pitchfork fashion axe, vexillologist coloring book irony tumblr photo booth hoodie flannel. Bushwick kale chips hexagon cornhole. Microdosing butcher flannel pitchfork readymade. Meggings sriracha venmo, tote bag banjo tousled austin polaroid affogato.',
          popularity: 10
        }),
        knex('products').insert({
          upc_code: 099428829944,
          name: 'Blue Cheese',
          measure: 'LB',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bleu_de_Gex.jpg/1200px-Bleu_de_Gex.jpg',
          description: 'Single-origin coffee echo park lumbersexual listicle vexillologist pok pok marfa, flexitarian selfies man braid photo booth distillery. Glossier ennui tumeric, literally helvetica williamsburg aesthetic banh mi before they sold out fam knausgaard slow-carb. Williamsburg enamel pin master cleanse +1 unicorn. Waistcoat pitchfork fashion axe, vexillologist coloring book irony tumblr photo booth hoodie flannel. Bushwick kale chips hexagon cornhole. Microdosing butcher flannel pitchfork readymade. Meggings sriracha venmo, tote bag banjo tousled austin polaroid affogato.',
          popularity: 6
        }),
        knex('products').insert({
          upc_code: 099428829945,
          name: 'Gallon Whole Milk',
          measure: 'QTY',
          image: 'https://images.samsclubresources.com/is/image/samsclub/0007874201894_A?$img_size_380x380$',
          description: 'Single-origin coffee echo park lumbersexual listicle vexillologist pok pok marfa, flexitarian selfies man braid photo booth distillery. Glossier ennui tumeric, literally helvetica williamsburg aesthetic banh mi before they sold out fam knausgaard slow-carb. Williamsburg enamel pin master cleanse +1 unicorn. Waistcoat pitchfork fashion axe, vexillologist coloring book irony tumblr photo booth hoodie flannel. Bushwick kale chips hexagon cornhole. Microdosing butcher flannel pitchfork readymade. Meggings sriracha venmo, tote bag banjo tousled austin polaroid affogato.',
          popularity: 9
        }),
        knex('products').insert({
          upc_code: 099428829946,
          name: 'Cauliflower',
          measure: 'LB',
          image: 'http://nutrawiki.org/wp-content/uploads/2015/09/Cauliflower.jpg',
          description: 'Single-origin coffee echo park lumbersexual listicle vexillologist pok pok marfa, flexitarian selfies man braid photo booth distillery. Glossier ennui tumeric, literally helvetica williamsburg aesthetic banh mi before they sold out fam knausgaard slow-carb. Williamsburg enamel pin master cleanse +1 unicorn. Waistcoat pitchfork fashion axe, vexillologist coloring book irony tumblr photo booth hoodie flannel. Bushwick kale chips hexagon cornhole. Microdosing butcher flannel pitchfork readymade. Meggings sriracha venmo, tote bag banjo tousled austin polaroid affogato.',
          popularity: 4
        })
      ]);
    });
};

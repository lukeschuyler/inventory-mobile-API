const Product = require('./product')

Product.fetchAll({withRelated: ['wasteSession']})
.then(products => {
  console.log(products.toJSON())
})
.catch(err => console.log(err))

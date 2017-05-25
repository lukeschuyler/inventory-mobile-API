const Product = require('./product.js')

Product.getAllCurrent()
.then(res => {
  console.log(res.toJSON())
})

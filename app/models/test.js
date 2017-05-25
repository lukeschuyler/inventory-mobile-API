const Product = require('./product.js')

// Product.getAllCurrent()
// .then(res => {
//   console.log(res.toJSON())
// })

// Product.deleteProduct(4)
// .then(res => {
//   console.log(res.toJSON())
// })

Product.getAll()
.then(res => {
  console.log(res.toJSON())
})

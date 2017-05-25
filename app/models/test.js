const Product = require('./product.js')

// Product.getAllCurrent()
// .then(res => {
//   console.log(res.toJSON())
// })

// Product.deleteProduct(4)
// .then(res => {
//   console.log(res.toJSON())
// })

// Product.getAll()
// .then(res => {
//   console.log(res.toJSON())
// })

// Product.getCurrentQty(4)
// .then(res => res.toJSON())
// .then(qty => {
//   Product.editProduct(4, {current_qty: qty})
// })

Product.getCurrentQty(4)
.then(res => {
  console.log(res.toJSON().current_qty)
})

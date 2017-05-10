const Product = require('./product')
const WasteSession = require('./waste_session.js')
const WasteLineItem = require('./waste_line_item.js')

// Product.fetchAll({withRelated: ['wasteSession']})
// .then(products => {
//   console.log(products.toJSON())
// })
// .catch(err => console.log(err))

// WasteSession.deleteSession(4)
// .then(res => {
//   console.log('res', res)
// })
// .catch(err => {
//   console.log(err.message)
// })

WasteLineItem.getAllBySession(2)
.then(res => {
  console.log(res.toJSON())
})

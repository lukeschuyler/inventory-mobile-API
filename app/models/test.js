const SalesLineItem = require('./sales_line_item.js')
const { getAll } = require('../controllers/allCtrl.js')

// const data = {   product_id: 2,
//           receiving_session_id: 3,
//           quantity: 20 }

// SalesLineItem.getAllBySession(1)
// .then(res => {
//   console.log(res.toJSON())
// })

getAll()

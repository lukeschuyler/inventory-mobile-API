const RecLineItem = require('./rec_line_item.js')

const data = {   product_id: 2,
          receiving_session_id: 3,
          quantity: 20 }

RecLineItem.addItem(data)
.then(res => {
  console.log(res.toJSON())
})

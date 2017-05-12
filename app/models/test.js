const RecSession = require('./rec_session.js')

const data = {   product_id: 2,
          receiving_session_id: 3,
          quantity: 20 }

RecSession.addSession({username: 'lukeschuyler'})
.then(res => {
  console.log(res.toJSON())
})

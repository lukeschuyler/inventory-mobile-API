const amazon = require('amazon-product-api');
var client = amazon.createClient({
  awsId: process.env.API_KEY,
  awsSecret: process.env.API_SECRET,
  awsTag: process.env.API_TAG
});

module.exports.search = (req, res, next) => {
  client.itemSearch({
    Keywords: req.body.query,
    ResponseGroup: 'Images, ItemAttributes'
  })
  .then(results => {
    console.log(res)
     res.status(200).json(results)
  })
  .catch(err => next(err));
}

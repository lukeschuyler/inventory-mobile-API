const amazon = require('amazon-product-api');
var client = amazon.createClient({
  awsId: process.env.API_KEY,
  awsSecret: process.env.API_SECRET,
  awsTag: process.env.API_TAG
});

module.exports.search = (req, res, next) => {
  
}

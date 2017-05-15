const amazon = require('amazon-product-api');
var client = amazon.createClient({
  awsId: process.env.API_KEY,
  awsSecret: process.env.API_SECRET,
  awsTag: process.env.API_TAG
});

module.exports.search = (req, res, next) => {
  client.itemSearch({
    Keywords: req.body.query,
    ResponseGroup: 'Images, ItemAttributes',
    MinimumPrice: 1
  })
  .then(results => {
    let searchResults = []

    for (let i = 0; i < results.length; i++) {
      let searchProduct = {}
      searchProduct.name = results.data[i].ItemAttributes[0].Title[0];

      if (results.data[i].ItemAttributes[0].Brand === undefined) {
          continue;
        } else {
          searchProduct.company = results.data[i].ItemAttributes[0].Brand[0];
        }
        
      searchProduct.link = results.data[i].DetailPageURL[0];
      searchProduct.ASIN = results.data[i].ASIN[0];
      searchProduct.UPC = results.data[i].ItemAttributes[0].UPC[0]

      if(results.data[i].ImageSets) {
        searchProduct.image = results.data[i].ImageSets[0].ImageSet[0].LargeImage[0].URL[0];
      } else {
        searchProduct.image = 'No Image Available'
      }

      if(results.data[i].ItemAttributes[0].Feature) {
        searchProduct.description = p.ItemAttributes[0].Feature[0];
      } else {
        searchProduct.description = 'No Description Available'
      }

      if(results.data[i].ItemAttributes[0].ListPrice) {
        searchProduct.price = (results.data[i].ItemAttributes[0].ListPrice[0].Amount[0] / 100).toFixed(2);
      } else {
        searchProduct.price = 'No Price Available'
      }
      searchResults.push(searchProduct)
    }
     res.status(200).json(searchResults)
  })
  .catch(err => next(err));
}

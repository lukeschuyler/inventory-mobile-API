'use strict'

const { bookshelf } = require('../db/database')
// require('./zoneMd')
// require('./trainerMd')

const Product = bookshelf.Model.extend({
  tableName: 'products',
  // zone() { return this.belongsTo('Zone')},
  // trainer: function() { return this.belongsTo('Trainer')}
}, {
  getAll() {
    return this.forge()
    .fetchAll()
    .then(products => products)
    .catch(error => error)
  },
  getOne(id) {
    return this.forge({upc_code: id})
    .fetch()
    .then(product => product)
    .catch(error => error)
  },
  addProduct(newProduct) {
    return this.forge(newProduct)
    .save()
    .then(product => product)
    .catch(error => error)
  },
  deleteProduct(id) {
    return this.forge({id})
    .destroy()
    .then(product => product)
    .catch(error => error)
  },
  editProduct(id, edits) {
    return this.where({id})
    .save(edits, {method: 'update'})
    .then(product => product)
    .catch(error => error)
  }
})

module.exports = bookshelf.model('Product', Product)

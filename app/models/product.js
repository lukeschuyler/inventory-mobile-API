'use strict'

const { bookshelf } = require('../db/database')
require('./inv_session')
require('./inv_line_item')
require('./waste_session')
require('./waste_line_item')

const Product = bookshelf.Model.extend({
  tableName: 'products',
  wasteSession: function() { return this.belongsToMany('WasteSession').through('WasteLineItem') },
  invSession: function() { return this.belongsToMany('InvSession').through('InvLineItem') }
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
    .then(product => {
      return product
    })
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

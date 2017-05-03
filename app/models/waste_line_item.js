'use strict'

const { bookshelf } = require('../db/database')
require('./product')
require('./waste_session')

const WasteLineItem = bookshelf.Model.extend({
  tableName: 'w_session_line_items',
  product: function() { return this.hasOne('Product') },
  session: function() { return this.hasOne('WasteSession') }
}, {
  getAll() {
    return this.forge()
    .fetchAll()
    .then(items => items)
    .catch(error => error)
  },
  getOne(id) {
    return this.forge({id})
    .fetch()
    .then(item => item)
    .catch(error => error)
  },
  addItem(newItem) {
    return this.forge(newItem)
    .save()
    .then(item => item)
    .catch(error => error)
  },
  deleteItem(id) {
    return this.forge({id})
    .destroy()
    .then(item => item)
    .catch(error => error)
  },
  editItem(id, edits) {
    return this.where({id})
    .save(edits, {method: 'update'})
    .then(item => item)
    .catch(error => error)
  }
})

module.exports = bookshelf.model('WasteLineItem', WasteLineItem)

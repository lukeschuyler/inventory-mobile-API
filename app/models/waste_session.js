'use strict'

const { bookshelf } = require('../db/database')
require('./waste_line_item')
require('./product')

const WasteSession = bookshelf.Model.extend({
  tableName: 'waste_sessions',
  products: function() { return this.belongsToMany('Product').through('WasteLineItem') }
}, {
  getAll() {
    return this.forge()
    .fetchAll({withRelated: ['products'], require: true})
    .then(sessions => sessions)
    .catch(error => error)
  },
  getOne(id) {
    return this.forge({id})
    .fetch()
    .then(session => session)
    .catch(error => error)
  },
  addSession(newSession) {
    return this.forge(newSession)
    .save()
    .then(session => session)
    .catch(error => error)
  },
  deleteSession(id) {
    return this.forge({id})
    .destroy()
    .then(session => session)
    .catch(error => error)
  },
  editSession(id, edits) {
    return this.where({id})
    .save(edits, {method: 'update'})
    .then(session => session)
    .catch(error => error)
  }
})

module.exports = bookshelf.model('WasteSession', WasteSession)

'use strict'

const { bookshelf } = require('../db/database')
require('./waste_line_item')

const InvSession = bookshelf.Model.extend({
  tableName: 'inventory_sessions',
  inv_line_items() { return this.hasMany('InvLineItems')}
}, {
  getAll() {
    return this.forge()
    .fetchAll()
    .then(sessions => sessions)
    .catch(error => error)
  },
  getOne(id) {
    return this.forge({upc_code: id})
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

module.exports = bookshelf.model('InvSession', InvSession)

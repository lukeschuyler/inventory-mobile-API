'use strict'

const { bookshelf } = require('../db/database')
require('./rec_line_item')
require('./product')

const RecSession = bookshelf.Model.extend({
  tableName: 'receiving_sessions',
  products: function() { return this.belongsToMany('Product').through('RecLineItem') },
  items: function() { return this.hasMany('RecLineItem') }
}, {
  getAll() {
    return this.forge()
    .fetchAll({withRelated: ['products'], require: true})
    .then(sessions => sessions)
    .catch(error => error)
  },
  getOne(id) {
    return this.forge({id})
    .fetch({withRelated: ['products', 'items'], require: true})
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

module.exports = bookshelf.model('RecSession', RecSession)

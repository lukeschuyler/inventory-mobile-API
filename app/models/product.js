'use strict'

const { bookshelf } = require('../db/database')
// require('./zoneMd')
// require('./trainerMd')

const Animal = bookshelf.Model.extend({
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
  addProduct(newAnimal) {
    return this.forge(newAnimal)
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
  editProduct(id, animalEdits) {
    return this.where({id})
    .save(animalEdits, {method: 'update'})
    .then(product => product)
    .catch(error => error)
  }
})

module.exports = bookshelf.model("Animal", Animal)

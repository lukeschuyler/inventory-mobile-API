'use strict'

const { bookshelf } = require('../db/database')
const WasteLineItem = require('../models/waste_line_item')
const Product = require('../models/product.js')

module.exports.getAll = (req, res, next) => {
  WasteLineItem.getAll()
  .then(items => res.status(200).json(items))
  .catch(error => next(error))
}

module.exports.getAllBySession = ({ params: {waste_session_id} }, res, next) => {
  WasteLineItem.getAllBySession(waste_session_id)
  .then(items => res.status(200).json(items))
  .catch(error => next(error))
}

module.exports.getOne = ({ params: {id} }, res, next) => {
  WasteLineItem.getOne(id)
  .then(item => res.status(200).json(item))
  .catch(error => next(error))
}

module.exports.addItem = ({body}, res, next) => {
  WasteLineItem.addItem(body.lineItem)
  .then(res => {
   return Product.editProduct(body.lineItem.product_id, {current_qty: (body.lineItem.quantity + body.qty)})
  })
  .then(item => res.status(200).json(item))
  .catch(error => next(error))
}

module.exports.deleteItem = ({params: {id} }, res, next) => {
  WasteLineItem.deleteItem(id)
  .then(item => res.status(202).json(item))
  .catch(error => next(error))
}

module.exports.editItem = ({body}, res, next) => {
  const id = body.id
  WasteLineItem.editItem(id, body)
  .then(item => res.status(200).json(item))
  .catch(error => next(error))
}

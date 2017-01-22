const defaultsdeep = require('lodash.defaultsdeep')
const isfunction = require('lodash.isfunction')
const isobject = require('lodash.isobject')
const isarray = require('lodash.isarray')

const OPTIONS = {
  value: null,
  base: {}
}

const doop = (value) => value

const array2object = function (array, options, callback) {
  const parameters = [].slice.call(arguments)
  const last = parameters.pop()

  callback = isfunction(last) ? last : doop
  options = defaultsdeep(options, OPTIONS)
  array = isarray(array) ? array : []

  return callback(reduce(array, options.base, options.value))
}

const reduce = function (array, object, value) {
  return array.reduce(function (accum, curr) {
    if (!object[curr]) {
      accum[curr] = value
    }
    return accum
  }, object)
}

module.exports = array2object

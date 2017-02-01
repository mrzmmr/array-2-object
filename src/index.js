const defaultsdeep = require('lodash.defaultsdeep')

const OPTIONS = {
  value: null,
  base: {}
}

const doop = (value) => value

const array2object = function (array, options, callback) {
  const parameters = [].slice.call(arguments)
  const last = parameters.pop()

  callback = last instanceof Function ? last : doop
  array = Array.isArray(array) ? array : []
  options = defaultsdeep(options, OPTIONS)

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

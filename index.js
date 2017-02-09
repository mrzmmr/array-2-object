'use strict'

module.exports = array2Object

function array2Object (array, options, callback) {
  var defaultSettings
  var parameters
  var settings
  var last

  parameters = [].slice.call(arguments)
  last = parameters.pop()

  defaultSettings = {
    value: null,
    base: {}
  }

  callback = (
    last instanceof Function
    ? last
    : doop
  )

  array = (
    Array.isArray(array)
    ? array
    : []
  )

  options = options || {}

  settings = Object.assign(defaultSettings, options)

  return callback(
    reduce(array, settings.base, settings.value)
  )

  function doop (value) {
    return value
  }

  function reduce (array, object, value) {
    return array.reduce(function (accum, curr) {
      if (!object[curr]) {
        accum[curr] = value
      }
      return accum
    }, object)
  }
}

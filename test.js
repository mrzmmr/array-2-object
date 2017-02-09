var array2Object = require('./')
var tape = require('tape')

var array = [ 'one', 'two', 'three' ]
var object = {three: 3}

var expected1 = {}
var expected2 = {one: null, two: null, three: null}
var expected3 = {one: null, two: null, three: 3}

tape(
  'Sync: Should return {}',
  function (test) {
    test.deepEqual(expected1, array2Object())
    test.end()
  }
)

tape(
  'Async: Should return {}',
  function (test) {
    array2Object(function (result) {
      test.deepEqual(expected1, result)
      test.end()
    })
  }
)

tape(
  'Sync: Should return {one: null, two: null, three: null}',
  function (test) {
    test.deepEqual(expected2, array2Object(array))
    test.end()
  }
)

tape(
  'Async: Should return {one: null, two: null, three: null}',
  function (test) {
    array2Object(array, function (result) {
      test.deepEqual(expected2, result)
      test.end()
    })
  }
)

tape(
  'Sync: Should return {one: null, two: null, three: 3}',
  function (test) {
    test.deepEqual(expected3, array2Object(array, {base: object}))
    test.end()
  }
)

tape(
  'Async: Should return {one: null, two: null, three: 3}',
  function (test) {
    array2Object(array, {base: object}, function (result) {
      test.deepEqual(expected3, result)
      test.end()
    })
  }
)

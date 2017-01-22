const array2object = require('../index')
const tape = require('tape')

const array = [ 'one', 'two', 'three' ]
const object = {three: 3}

/*
 * Test 1
 */
const expected1 = {}

tape('Sync: Should return {}', (test) => {
  test.deepEqual(expected1, array2object())
  test.end()
})

tape('Async: Should return {}', (test) => {
  array2object(function (result) {
    test.deepEqual(expected1, result)
    test.end()
  })
})

/*
 * Test 2
 */
const expected2 = {one: null, two: null, three: null}

tape('Sync: Should return {one: null, two: null, three: null}', (test) => {
  test.deepEqual(expected2, array2object(array))
  test.end()
})

tape('Async: Should return {one: null, two: null, three: null}', (test) => {
  array2object(array, (result) => {
    test.deepEqual(expected2, result)
    test.end()
  })
})

/*
 * Test 3
 */
const expected3 = {one: null, two: null, three: 3}

tape('Sync: Should return {one: null, two: null, three: 3}', (test) => {
  test.deepEqual(expected3, array2object(array, {base: object}))
  test.end()
})

tape('Async: Should return {one: null, two: null, three: 3}', (test) => {
  array2object(array, {base: object}, (result) => {
    test.deepEqual(expected3, result)
    test.end()
  })
})

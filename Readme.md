# array-2-object

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![CircleCI](https://img.shields.io/circleci/project/github/mrzmmr/array-2-object.svg)](https://circleci.com/gh/mrzmmr/array-2-object)
[![Codecov](https://img.shields.io/codecov/c/github/mrzmmr/array-2-object.svg)](https://codecov.io/gh/mrzmmr/array-2-object)
[![David](https://img.shields.io/david/mrzmmr/array-2-object.svg)](https://david-dm.org/)
[![David](https://img.shields.io/david/dev/mrzmmr/array-2-object.svg)](https://david-dm.org/)
[![npm](https://img.shields.io/npm/v/array-2-object.svg)](https://www.npmjs.com/package/array-2-object.svg)

> Returns an object from a given array

TODO: Fill out this long description.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Install

Using npm
```sh
npm install --save array-2-object
```

Using yarn
```sh
yarn add array-2-object
```

## Usage

Signature
```js
array2object (array: Array, [options: Object], [callback: Function]): Object
```

Default options
```js
{
  base: {},
  value: null
}
```

```js
const array2object = require('array-2-object')
```

Examples given the following array

```js
const array = [
  'V', 'version',
  'n', 'name'
]
```

```js
const object = array2object(array)

/* object
 * {
 *   "version": null,
 *   "name": null,
 *   "V": null,
 *   "n": null
 * }
 */
```

With a different initial value

```js
const options = {value: "foo"}
const object = array2object(array, options)

/* object
 * {
 *   "version": "foo",
 *   "name": "foo",
 *   "V": "foo",
 *   "n": "foo"
 * }
 */
```

With a different initial value and a base object

```js
const base = {
  "dependencies": "bar",
  "S": "bar"
}

const options = {
  value: "foo",
  base: base
}

const object = array2object(array, options)

/* object
 * {
 *   "dependencies": "bar",
 *   "version": "foo",
 *   "name": "foo",
 *   "S": "bar",
 *   "V": "foo",
 *   "n": "foo"
 * }
 */
```

## Contribute

PRs accepted & greatly appreciated.


## Tests

```sh
npm install
npm test
```

## Dependencies

- [lodash.defaultsdeep](https://github.com/lodash/lodash): The lodash method `_.defaultsDeep` exported as a module.
- [lodash.isarray](https://github.com/lodash/lodash): The lodash method `_.isArray` exported as a module.
- [lodash.isfunction](https://github.com/lodash/lodash): The lodash method `_.isFunction` exported as a module.
- [lodash.isobject](https://github.com/lodash/lodash): The modern build of lodash’s `_.isObject` as a module.

## Dev Dependencies

- [babel-cli](https://github.com/babel/babel/tree/master/packages): Babel command line.
- [babel-preset-env](https://github.com/babel/babel-preset-env): A Babel preset for each environment.
- [rimraf](https://github.com/isaacs/rimraf): A deep deletion module for node (like `rm -rf`)
- [tap](https://github.com/tapjs/node-tap): A Test-Anything-Protocol library


## License

MIT

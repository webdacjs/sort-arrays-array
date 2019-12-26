const isArr = Array.isArray
const ch = require('console-hue')
const sortutil = require('./sortutil')
const warnings = {
  notArrayOfArrays: 'The array to sort is not an array of arrays.',
  fieldNotNumeric: 'The field to sort is not numeric.',
  invalidOptions: 'The options parameter is not an Object.',
  generic: 'Returning original value'
}

const notArrayOfArrays = arr => !isArr(arr) || arr.lengh === 0 || arr.filter(x => !isArr(x)).length > 0

function paramsValid (arrayToSort, fieldIdx, options) {
  if (notArrayOfArrays(arrayToSort)) {
    ch.warn(`${warnings.notArrayOfArrays} ${warnings.generic}`)
    return
  } else if (isNaN(fieldIdx)) {
    ch.warn(`${warnings.fieldNotNumeric} ${warnings.generic}`)
    return
  }
  if (options.constructor.name.toLowerCase() !== 'object') {
    ch.warn(`${warnings.invalidOptions} ${warnings.generic}`)
    return
  }
  return true
}

module.exports = function (arrayToSort, fieldIdx = 0, options = {}) {
  if (paramsValid(arrayToSort, fieldIdx, options)) {
    return sortutil(arrayToSort, parseInt(fieldIdx), options)
  }
  return arrayToSort
}

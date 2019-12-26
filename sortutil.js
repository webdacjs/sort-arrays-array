const stringSortCheck = (arr, idx) => arr
  .map(i => i[idx])
  .map(x => parseFloat(x))
  .filter(x => isNaN(x)).length > 0

function getFn (caseInsensitive, stringSort) {
  if (caseInsensitive && stringSort) {
    return x => String(x).toLocaleLowerCase()
  } else if (stringSort) {
    return x => String(x)
  }
  return x => parseFloat(x)
}

function getSortConstants (order, caseInsensitive, stringSort) {
  const first = order === 'desc' ? 1 : -1
  const second = order === 'desc' ? -1 : 1
  return { first, second, fn: getFn(caseInsensitive, stringSort) }
}

function sortByIdx (arrayToSort, fieldIdx, order, caseInsensitive, stringSort) {
  const sortConstants = getSortConstants(order, caseInsensitive, stringSort)
  return arrayToSort.sort((a, b) => {
    if (sortConstants.fn(a[fieldIdx]) < sortConstants.fn(b[fieldIdx])) {
      return sortConstants.first
    } else if (sortConstants.fn(a[fieldIdx]) > sortConstants.fn(b[fieldIdx])) {
      return sortConstants.second
    }
    return 0
  })
}

module.exports = function (arrayToSort, fieldIdx, options) {
  const { order, caseInsensitive } = options
  const sortable = arrayToSort.filter(x => x[fieldIdx])
  const missing = arrayToSort.filter(x => !x[fieldIdx])
  const stringSort = stringSortCheck(arrayToSort, fieldIdx)
  return [...sortByIdx(sortable, fieldIdx, order, caseInsensitive, stringSort), ...missing]
}

import { DataType, sortType } from '../../layouts/Table'
import { stringIsADate, stringIsANumber } from './Utils'

/**
 * Sorts two string values according to the specified sort order
 * @param {string} firstValue - The first value to be compared
 * @param {string} secondValue - The second value to be compared
 * @param {sortType} sort - The sort order to use for the comparison
 * @returns {number} - Returns -1, 0, or 1 depending on the comparison result
 */
function sortStringRule(
  firstValue: string,
  secondValue: string,
  sort: sortType
) {
  if (sort.order === 'asc') {
    if (firstValue < secondValue) {
      return -1
    }
    if (firstValue > secondValue) {
      return 1
    }
    return 0
  } else if (sort.order === 'desc') {
    if (firstValue < secondValue) {
      return 1
    }
    if (firstValue > secondValue) {
      return -1
    }
    return 0
  } else {
    return 0
  }
}

/**
 * Sorts two date values according to the specified sort order
 * @param {string} firstValue - The first value to be compared
 * @param {string} secondValue - The second value to be compared
 * @param {sortType} sort - The sort order to use for the comparison
 * @returns {number} - Returns -1, 0, or 1 depending on the comparison result
 */
function sortDateRule(firstValue: string, secondValue: string, sort: sortType) {
  const firstDate = new Date(firstValue)
  const secondDate = new Date(secondValue)

  if (sort.order === 'asc') {
    if (firstDate < secondDate) {
      return -1
    }
    if (firstDate > secondDate) {
      return 1
    }
    return 0
  } else if (sort.order === 'desc') {
    if (firstDate < secondDate) {
      return 1
    }
    if (firstDate > secondDate) {
      return -1
    }
    return 0
  } else {
    return 0
  }
}

/**
 * Compare two number values based on the provided sorting order.
 * @param {string} firstValue - The first number value to compare.
 * @param {string} secondValue - The second number value to compare.
 * @param {sortType} sort - The sorting order to use.
 * @returns {number} - A number indicating the sorting order of the two values.
 */
function sortNumberRule(
  firstValue: string,
  secondValue: string,
  sort: sortType
) {
  const firstNumber = Number(firstValue)
  const secondNumber = Number(secondValue)

  if (sort.order === 'asc') {
    if (firstNumber < secondNumber) {
      return -1
    }
    if (firstNumber > secondNumber) {
      return 1
    }
    return 0
  } else if (sort.order === 'desc') {
    if (firstNumber < secondNumber) {
      return 1
    }
    if (firstNumber > secondNumber) {
      return -1
    }
    return 0
  } else {
    return 0
  }
}

/**
 * Compare two values based on the provided sorting order.
 * @param {DataType} a - The first data object to compare.
 * @param {DataType} b - The second data object to compare.
 * @param {sortType} sort - The sorting order to use.
 * @returns {number} - A number indicating the sorting order of the two values.
 */
function sortRules(a: DataType, b: DataType, sort: sortType) {
  if (!sort.value) return 0
  if (!sort.order) return 0
  const firstValue = a[sort.value]
  const secondValue = b[sort.value]

  if (stringIsANumber(firstValue) && stringIsANumber(secondValue)) {
    return sortNumberRule(firstValue, secondValue, sort)
  }

  if (stringIsADate(firstValue) && stringIsADate(secondValue)) {
    return sortDateRule(firstValue, secondValue, sort)
  }

  return sortStringRule(firstValue, secondValue, sort)
}

/**
 * Sort an array of data objects based on the provided sorting order.
 * @param {DataType[]} data - The array of data objects to sort.
 * @param {sortType} sort - The sorting order to use.
 * @returns {DataType[]} - The sorted array of data objects.
 */
export function sortData(data: DataType[], sort: sortType) {
  if (sort.value !== null && sort.order !== null) {
    return data.sort((a, b) => sortRules(a, b, sort))
  } else {
    return data
  }
}

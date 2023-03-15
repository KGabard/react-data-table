import { DataType, sortType } from '../../layouts/Table'
import { stringIsADate, stringIsANumber } from './Utils'

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

export function sortData(data: DataType[], sort: sortType) {
  if (sort.value !== null && sort.order !== null) {
    return data.sort((a, b) => sortRules(a, b, sort))
  } else {
    return data
  }
}

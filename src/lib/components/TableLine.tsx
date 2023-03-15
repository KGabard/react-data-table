import React from 'react'
import { DataType } from '../layouts/Table'

type Props = {
  data: DataType
  referenceKeys: string[]
  columnsWidth: number[]
  row: number
  colors: {
    primary: string
    secondary: string
  }
}

// Function that check if the keys of the current object are the same as the reference keys
export function isKeysEqualsReferenceKeys(
  item: DataType,
  referenceKeys: string[]
) {
  const currentKeys = Object.keys(item)

  return (
    currentKeys.length === referenceKeys.length &&
    currentKeys.every((key) => referenceKeys.includes(key))
  )
}

// Function that check if the keys of the current object are in the same order than the reference keys
export function isKeysInSameOrderThanReferenceKeys(
  item: DataType,
  referenceKeys: string[]
) {
  const currentKeys = Object.keys(item)

  return currentKeys.every((key, index) => key === referenceKeys[index])
}

function isRowOdd(number: number) {
  return number % 2 === 1
}

function TableLine({ data, referenceKeys, columnsWidth, row, colors }: Props) {
  const values = Object.values(data)

  return isKeysInSameOrderThanReferenceKeys(data, referenceKeys) ? (
    <ul className="table-line">
      {values.map((value, index) => {
        return (
          <li
            className="table-line__item"
            key={index}
            style={{
              flexGrow: columnsWidth[index],
              backgroundColor: isRowOdd(row) ? colors.secondary : 'transparent',
            }}
          >
            <span className="table-line__item__text">{value}</span>
          </li>
        )
      })}
    </ul>
  ) : (
    <ul className="table-line">
      <p className="table-line__error">
        {isKeysEqualsReferenceKeys(data, referenceKeys)
          ? 'The keys are not in the same order than the reference keys'
          : 'The keys are not the same than the reference keys'}
      </p>
    </ul>
  )
}

export default TableLine

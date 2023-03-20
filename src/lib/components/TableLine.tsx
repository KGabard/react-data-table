import React from 'react'
import { DataType } from '../layouts/Table'

/**
 * Props for the TableLine component
 * @typedef {Object} Props
 * @property {DataType} data - Data to be rendered in the table line.
 * @property {string[]} referenceKeys - The reference keys for the table.
 * @property {number[]} columnsWidth - Widths of the table columns.
 * @property {number} number - The index of the row.
 * @property {{primary: string, secondary: string}} colors - The primary and secondary colors of the table
 */
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

/**
 * Function that checks if the keys of the current object are the same as the reference keys.
 * @param {DataType} item - The current object to check the keys against.
 * @param {string[]} referenceKeys - The reference keys to compare with.
 * @returns {boolean} True if the keys are equal, false otherwise.
 */
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

/**
 * Function that checks if the keys of the current object are in the same order as the reference keys.
 * @param {DataType} item - The current object to check the keys against.
 * @param {string[]} referenceKeys - The reference keys to compare with.
 * @returns {boolean} True if the keys are in the same order, false otherwise.
 */
export function isKeysInSameOrderThanReferenceKeys(
  item: DataType,
  referenceKeys: string[]
) {
  const currentKeys = Object.keys(item)

  return currentKeys.every((key, index) => key === referenceKeys[index])
}

/**
 * Function that checks if a number is odd.
 * @param {number} number - The number to check.
 * @returns {boolean} True if the number is odd, false otherwise.
 */
function isRowOdd(number: number) {
  return number % 2 === 1
}

/**
 * Component that renders a table line.
 * @param {Props} props - The props for the TableLine component
 * @returns {JSX.Element} A row element for the table
 */
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

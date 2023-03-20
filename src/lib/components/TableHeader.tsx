import React from 'react'
import { sortType } from '../layouts/Table'
import { convertCamelCaseToTitleCase } from '../scripts/utils/Utils'
import FilterButton from './FilterButton'

/**
 * Props for the TableHeader component
 * @typedef {Object} Props
 * @property {string[]} referenceKeys - The keys of the data to be displayed in the table
 * @property {number[]} columnsWidth - The width of each table column
 * @property {sortType} sort - The current sort type of the table
 * @property {(sort: sortType) => void} setSort - A function to set the sort type of the table
 * @property {(page: number) => void} setPage - A function to set the current page number of the table
 * @property {boolean} enableSort - Whether or not sorting is enabled
 * @property {{primary: string, secondary: string}} colors - The primary and secondary colors of the table
 */
type Props = {
  referenceKeys: string[]
  columnsWidth: number[]
  sort: sortType
  setSort: (sort: sortType) => void
  setPage: (page: number) => void
  enableSort: boolean
  colors: {
    primary: string
    secondary: string
  }
}

/**
 * A component that displays the header row of a table
 * @param {Props} props - The props for the TableHeader component
 * @returns {JSX.Element} A header row element for the table
 */
function TableHeader({
  referenceKeys,
  columnsWidth,
  sort,
  setSort,
  setPage,
  enableSort,
  colors,
}: Props) {
  return (
    <ul className="table-header" style={{ borderColor: colors.primary }}>
      {referenceKeys.map((key, index) => (
        <li
          className="table-header__item"
          key={index}
          style={{ flex: columnsWidth[index] }}
        >
          <p className="table-header__item__title">
            {convertCamelCaseToTitleCase(key)}
          </p>
          {enableSort && (
            <div className="table-header__item__sort-container">
              <FilterButton
                order="asc"
                currentKey={key}
                sort={sort}
                setSort={setSort}
                setPage={setPage}
                colors={colors}
                key={'asc' + index.toString()}
              />
              <FilterButton
                order="desc"
                currentKey={key}
                sort={sort}
                setSort={setSort}
                setPage={setPage}
                colors={colors}
                key={'desc' + index.toString()}
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}

export default TableHeader

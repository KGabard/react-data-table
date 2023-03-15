import React from 'react'
import { sortType } from '../layouts/Table'
import { convertCamelCaseToTitleCase } from '../scripts/utils/Utils'
import FilterButton from './FilterButton'

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

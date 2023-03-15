import React, { useState } from 'react'
import { sortType } from '../layouts/Table'
import triangleIcon from '../assets/icons/triangle-icon.svg'
import {ReactComponent as triangleIconV2} from '../assets/icons/triangle-icon.svg';

type Props = {
  order: 'asc' | 'desc'
  currentKey: string
  sort: sortType
  setSort: (sort: sortType) => void
  setPage: (page: number) => void
  colors: {
    primary: string
    secondary: string
  }
}

function FilterButton({
  order,
  currentKey,
  sort,
  setSort,
  setPage,
  colors,
}: Props) {
  const [isHovered, setIsHovered] = useState(false)

  const isActive = sort.value === currentKey && sort.order === order

  const handleSort = () => {
    if (currentKey === sort.value && order === sort.order) {
      setSort({ value: null, order: null })
    } else {
      setSort({ value: currentKey, order })
    }
    setPage(1)
  }

  return (
    <button
      className={`table-header__item__sort-container__button ${
        isActive ? 'table-header__item__sort-container__button--active' : ''
      }`}
      onClick={() => handleSort()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor:
          isHovered || isActive ? colors.secondary : colors.primary,
      }}
    >
      <img
        src={triangleIcon}
        alt={`${order}ending sort`}
        className={`table-header__item__sort-container__button__${order}-icon`}
      />
    </button>
  )
}

export default FilterButton

import React, { useState } from 'react'
import triangleIcon from '../assets/icons/triangle-icon.svg'

type Props = {
  type: 'page' | 'next' | 'previous'
  page?: string
  currentPage: number
  nextPage: () => void
  previousPage: () => void
  setPage: (page: number) => void
  colors: {
    primary: string
    secondary: string
  }
}

function PageButton({
  type,
  page,
  currentPage,
  nextPage,
  previousPage,
  setPage,
  colors,
}: Props) {
  const [isHovered, setIsHovered] = useState(false)

  const handleSetPage = () => {
    if (!page) return
    if (!Number.isInteger(parseInt(page))) return
    setPage(parseInt(page))
  }

  const isClickable = () => {
    if (page && Number.isInteger(parseInt(page))) return true
    return false
  }

  const isActive = () => {
    if (page && Number.isInteger(parseInt(page))) {
      if (parseInt(page) === currentPage) return true
    }
    return false
  }

  const backgroundColor = () => {
    if (isHovered && isClickable()) return colors.secondary
    if (isActive()) return colors.secondary
    return colors.primary
  }

  return (
    <>
      {type === 'next' && (
        <button
          className="page-selector__button"
          onClick={nextPage}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            backgroundColor: isHovered ? colors.secondary : colors.primary,
            cursor: 'pointer',
          }}
        >
          <img
            src={triangleIcon}
            alt={'Next'}
            className="page-selector__button__next-icon"
          />
        </button>
      )}
      {type === 'previous' && (
        <button
          className="page-selector__button"
          onClick={previousPage}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            backgroundColor: isHovered ? colors.secondary : colors.primary,
            cursor: 'pointer',
          }}
        >
          <img
            src={triangleIcon}
            alt={'Previous'}
            className="page-selector__button__previous-icon"
          />
        </button>
      )}
      {type === 'page' && (
        <button
          className={`page-selector__button ${
            page === currentPage.toString()
              ? 'page-selector__button--active'
              : ''
          }`}
          onClick={() => handleSetPage()}
          value={page}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            backgroundColor: backgroundColor(),
            transition: 'background-color 0.2s ease-in-out',
            cursor: isClickable() ? 'pointer' : 'default',
          }}
        >
          {page}
        </button>
      )}
    </>
  )
}

export default PageButton

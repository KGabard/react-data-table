import React from 'react'
import PageButton from './PageButton'

type Props = {
  currentPage: number
  maxPage: number
  nextPage: () => void
  previousPage: () => void
  setPage: (page: number) => void
  colors: {
    primary: string
    secondary: string
  }
}

export function pageArrayCreator(currentPage: number, maxPage: number) {
  let pageArray: string[] = []
  const maxPageArrayLength = 7

  if (currentPage < 1 || currentPage > maxPage) return []
  if (!Number.isInteger(currentPage) || !Number.isInteger(maxPage)) return []

  if (maxPage <= maxPageArrayLength) {
    for (let page = 1; page <= maxPage; page++) {
      pageArray.push(page.toString())
    }
  } else {
    if (currentPage <= 4) {
      pageArray = ['1', '2', '3', '4', '5', '...', maxPage.toString()]
    } else if (currentPage >= maxPage - 3) {
      pageArray = [
        '1',
        '...',
        (maxPage - 4).toString(),
        (maxPage - 3).toString(),
        (maxPage - 2).toString(),
        (maxPage - 1).toString(),
        maxPage.toString(),
      ]
    } else {
      pageArray = [
        '1',
        '...',
        (currentPage - 1).toString(),
        currentPage.toString(),
        (currentPage + 1).toString(),
        '...',
        maxPage.toString(),
      ]
    }
  }

  return pageArray
}

function PageSelector({
  currentPage,
  maxPage,
  nextPage,
  previousPage,
  setPage,
  colors,
}: Props) {
  const pageArray = pageArrayCreator(currentPage, maxPage)

  return (
    <div className="page-selector">
      <PageButton
        type="previous"
        currentPage={currentPage}
        nextPage={nextPage}
        previousPage={previousPage}
        setPage={setPage}
        colors={colors}
      />
      {pageArray.map((page, index) => (
        <PageButton
          type="page"
          page={page}
          currentPage={currentPage}
          nextPage={nextPage}
          previousPage={previousPage}
          setPage={setPage}
          colors={colors}
          key={`page ${index}`}
        />
      ))}
      <PageButton
        type="next"
        currentPage={currentPage}
        nextPage={nextPage}
        previousPage={previousPage}
        setPage={setPage}
        colors={colors}
      />
    </div>
  )
}

export default PageSelector

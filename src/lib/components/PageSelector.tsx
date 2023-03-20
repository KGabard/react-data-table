import React from 'react'
import PageButton from './PageButton'

/**
 * @typedef {object} Props
 * @property {number} currentPage - The current page.
 * @property {number} maxPage - The maximum page.
 * @property {() => void} nextPage - The function that handles the next page.
 * @property {() => void} previousPage - The function that handles the previous page.
 * @property {(page: number) => void} setPage - The function that handles setting the page.
 * @property {{primary: string, secondary: string}} colors - Object containing primary and secondary color values.
 */
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

/**
 * Creates an array of pages to be displayed based on the current page and the maximum page.
 *
 * @param {number} currentPage - The current page.
 * @param {number} maxPage - The maximum page.
 * @returns {string[]} - The array of pages.
 */
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

/**
 * A component that displays a page selector UI element.
 * @param {Props} props - The props object containing the component's properties.
 * @return {JSX.Element} A React component that displays a page selector.
 */
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

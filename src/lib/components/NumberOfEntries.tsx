import React from 'react'

/**
 * @typedef {Object} Props
 * @property {number} numberOfEntries - The number of entries to show per page.
 * @property {(numberOfEntries: number) => void} setNumberOfEntries - Function to set the number of entries to show per page.
 * @property {(page: number) => void} setPage - Function to set the current page.
 */
type Props = {
  numberOfEntries: number
  setNumberOfEntries: (numberOfEntries: number) => void
  setPage: (page: number) => void
}

/**
 * A component to select the number of entries to show per page.
 *
 * @param {Props} props - The props for the component.
 * @returns {JSX.Element} - The component.
 */
function NumberOfEntries({
  numberOfEntries,
  setNumberOfEntries,
  setPage,
}: Props) {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNumberOfEntries(Number.parseInt(event.target.value))
    setPage(1)
  }

  return (
    <div className="number-of-entries">
      <p className="number-of-entries__text">Show</p>
      <select
        className="number-of-entries__select"
        onChange={handleSelectChange}
        value={numberOfEntries}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <p className="number-of-entries__text">entries</p>
    </div>
  )
}

export default NumberOfEntries

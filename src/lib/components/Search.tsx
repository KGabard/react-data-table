import React from 'react'
import magnifyingGlassIcon from '../assets/icons/magnifying-glass-icon.svg'

/**
 * Props for the Search component
 * @typedef {Object} Props
 * @property {string} search - The current search query
 * @property {(search: string) => void} setSearch - A function to update the search query
 * @property {(page: number) => void} setPage - A function to update the page number
 */
type Props = {
  search: string
  setSearch: (search: string) => void
  setPage: (page: number) => void
}

/**
 * A search input component
 * @param {Props} props - The props for the Search component
 * @returns {JSX.Element} A search input element
 */
function Search({ search, setSearch, setPage }: Props) {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
    setPage(1)
  }

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Search"
        onChange={handleSearch}
        value={search}
      />
      <img
        className="search__icon"
        src={magnifyingGlassIcon}
        alt="Magnifying glass"
      />
    </div>
  )
}

export default Search

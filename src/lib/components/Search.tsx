import React from 'react'
import magnifyingGlassIcon from '../assets/icons/magnifying-glass-icon.svg'

type Props = {
  search: string
  setSearch: (search: string) => void
  setPage: (page: number) => void
}

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

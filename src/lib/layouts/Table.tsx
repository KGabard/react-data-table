import React, { useState } from 'react'
import TableHeader from '../components/TableHeader'
import TableLine from '../components/TableLine'
import NumberOfEntries from '../components/NumberOfEntries'
import PageSelector from '../components/PageSelector'
import Search from '../components/Search'
import { sortData } from '../scripts/utils/SortLogic'
import '../css/styles.css'

export type DataType = {
  [key: string]: string
}

export type sortType = {
  value: string | null
  order: 'asc' | 'desc' | null
}

type Props = {
  data: DataType[]
  columnsWidth: number[]
  enableNumberOfEntries?: boolean
  enableSearch?: boolean
  enableSort?: boolean
  colors?: {
    primary: string
    secondary: string
  }
}

function filterData(data: DataType[], search: string) {
  if (search === '') return data

  const filteredData = data.filter((item) => {
    let isFound = false
    const regex = new RegExp(search, 'i')
    const found = Object.values(item).some((value) => regex.test(value))
    if (found) {
      isFound = true
    }

    return isFound
  })
  return filteredData
}

function Table({
  data,
  columnsWidth,
  enableNumberOfEntries = false,
  enableSearch = false,
  enableSort = false,
  colors = {
    primary: '#000000',
    secondary: '#909090',
  },
}: Props) {
  let propsError = false
  const referenceKeys = data.length > 0 ? Object.keys(data[0]) : []

  const [currentPage, setCurrentPage] = useState(1)
  const [entriesPerPage, setEntriesPerPage] = useState(10)
  const [sort, setSort] = useState<sortType>({ value: null, order: null })
  const [search, setSearch] = useState('')

  let filteredData = [...data]
  if (search !== '') {
    filteredData = filterData(filteredData, search)
  }

  const currentFirstItem = Math.min(
    (currentPage - 1) * entriesPerPage + 1,
    filteredData.length
  )
  const currentLastItem = Math.min(
    currentPage * entriesPerPage,
    filteredData.length
  )
  const maxPage = Math.ceil(filteredData.length / entriesPerPage)

  if (sort.value !== null && sort.order !== null) {
    filteredData = sortData(filteredData, sort)
  }
  const sliceData = filteredData.slice(currentFirstItem - 1, currentLastItem)

  const nextPage = () => {
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  if (columnsWidth.length !== referenceKeys.length) {
    propsError = true
  }

  return !propsError ? (
    <section className="table">
      {enableNumberOfEntries && (
        <NumberOfEntries
          numberOfEntries={entriesPerPage}
          setNumberOfEntries={setEntriesPerPage}
          setPage={setCurrentPage}
        />
      )}
      {enableSearch && (
        <Search
          search={search}
          setSearch={setSearch}
          setPage={setCurrentPage}
        />
      )}
      <div className="table__container" style={{ borderColor: colors.primary }}>
        <TableHeader
          referenceKeys={referenceKeys}
          columnsWidth={columnsWidth}
          sort={sort}
          setSort={setSort}
          setPage={setCurrentPage}
          enableSort={enableSort}
          colors={colors}
        />
        {sliceData.length > 0 ? (
          sliceData.map((item, index) => {
            return (
              <TableLine
                data={item}
                referenceKeys={referenceKeys}
                columnsWidth={columnsWidth}
                key={index}
                row={index}
                colors={colors}
              />
            )
          })
        ) : (
          <p className="table__no-data">No data</p>
        )}
      </div>
      <p className="table__page-indicator">{`Showing ${currentFirstItem} to ${currentLastItem} of ${filteredData.length} entries`}</p>
      <PageSelector
        currentPage={currentPage}
        maxPage={maxPage}
        nextPage={nextPage}
        previousPage={previousPage}
        setPage={setCurrentPage}
        colors={colors}
      />
    </section>
  ) : (
    <section className="table">
      <p className="table__error">
        Error in props : ColumnsWidth length different from referenceKeys length
      </p>
    </section>
  )
}

export default Table

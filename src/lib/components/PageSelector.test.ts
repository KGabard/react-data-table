import { pageArrayCreator } from './PageSelector'

describe('pageArrayCreator', () => {
  it('should return an empty array', () => {
    let currentPage = -1
    let maxPage = 5
    expect(pageArrayCreator(currentPage, maxPage)).toEqual([])
    
    currentPage = 6
    maxPage = 5
    expect(pageArrayCreator(currentPage, maxPage)).toEqual([])
    
    currentPage = 1.5
    maxPage = 5
    expect(pageArrayCreator(currentPage, maxPage)).toEqual([])
    
    currentPage = 1
    maxPage = 5.4
    expect(pageArrayCreator(currentPage, maxPage)).toEqual([])
  })
  it('should return an array of 5 string numbers', () => {
    const currentPage = 1
    const maxPage = 5
    expect(pageArrayCreator(currentPage, maxPage)).toEqual([
      '1',
      '2',
      '3',
      '4',
      '5',
    ])
  })

  it('should return this array ["1", "2", "3", "4", "5", "...", "50"]', () => {
    const currentPage = 4
    const maxPage = 50
    expect(pageArrayCreator(currentPage, maxPage)).toEqual([
      '1',
      '2',
      '3',
      '4',
      '5',
      '...',
      '50',
    ])
  })
  it('should return this array ["1", "...", "4", "5", "6", "...", "50"]', () => {
    const currentPage = 5
    const maxPage = 50
    expect(pageArrayCreator(currentPage, maxPage)).toEqual([
      '1',
      '...',
      '4',
      '5',
      '6',
      '...',
      '50',
    ])
  })
  it('should return this array ["1", "...", "46", "47", "48", "49", "50"]', () => {
    const currentPage = 47
    const maxPage = 50
    expect(pageArrayCreator(currentPage, maxPage)).toEqual([
      '1',
      '...',
      '46',
      '47',
      '48',
      '49',
      '50',
    ])
  })
  it('should return this array ["1", "...", "45", "46", "47", "...", "50"]', () => {
    const currentPage = 46
    const maxPage = 50
    expect(pageArrayCreator(currentPage, maxPage)).toEqual([
      '1',
      '...',
      '45',
      '46',
      '47',
      '...',
      '50',
    ])
  })
})

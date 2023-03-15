import {
  isKeysEqualsReferenceKeys,
  isKeysInSameOrderThanReferenceKeys,
} from './TableLine'

const referenceItem = {
  firstName: 'Elijah',
  lastName: 'Larsen',
  startDate: '9/3/2006',
  department: 'Marketing',
  dateOfBirth: '12/26/1997',
  street: 'Chambers Alley',
  city: 'Bridgeport',
  state: 'Tennessee',
  zipCode: '53584',
}

const itemWithDifferentKey = {
  firstName: 'John',
  lastName: 'Donovan',
  startDate: '9/1/2006',
  department: 'Sales',
  dateOfBirth: '7/17/1976',
  differentKey: 'Monroe Tunnel',
  city: 'San Antonio',
  state: 'Florida',
  zipCode: '10494',
}

const itemWithDifferentKeyOrder = {
  lastName: 'Donovan',
  firstName: 'John',
  startDate: '9/1/2006',
  department: 'Sales',
  dateOfBirth: '7/17/1976',
  street: 'Monroe Tunnel',
  city: 'San Antonio',
  state: 'Florida',
  zipCode: '10494',
}

const referenceKeys = Object.keys(referenceItem)

// test isKeysEqualsReferenceKeys
describe('isKeysEqualsReferenceKeys test suite', () => {
  it('should return true if keys are equals to reference keys', () => {
    expect(isKeysEqualsReferenceKeys(referenceItem, referenceKeys)).toBe(true)
    expect(
      isKeysEqualsReferenceKeys(itemWithDifferentKeyOrder, referenceKeys)
    ).toBe(true)
  })

  it('should return false if keys are not equals to reference keys', () => {
    expect(isKeysEqualsReferenceKeys(itemWithDifferentKey, referenceKeys)).toBe(
      false
    )
  })
})

// test isKeysInSameOrderThanReferenceKeys
describe('isKeysInSameOrderThanReferenceKeys test suite', () => {
  it('should return true if keys are in same order than reference keys', () => {
    expect(
      isKeysInSameOrderThanReferenceKeys(referenceItem, referenceKeys)
    ).toBe(true)
  })

  it('should return false if keys are not in same order than reference keys', () => {
    expect(
      isKeysInSameOrderThanReferenceKeys(
        itemWithDifferentKeyOrder,
        referenceKeys
      )
    ).toBe(false)
  })
})

/**
 * Returns a new date object by subtracting the specified number of years from the given date.
 * @param {Date} date - The date object to subtract years from.
 * @param {number} years - The number of years to subtract.
 * @returns {Date} - The new date object.
 */
export function subYears(date: Date, years: number): Date {
  return new Date(date.getFullYear() - years, date.getMonth(), date.getDate())
}

/**
 * Converts a camelCase string to title case.
 * @param {string} stringToConvert - The camelCase string to convert.
 * @returns {string} - The title case string.
 */
export function convertCamelCaseToTitleCase(stringToConvert: string): string {
  return stringToConvert
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Insert space before capital letters
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2') // Insert space between consecutive capital letters
    .split(' ') // Split string into array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
    .join(' ') // Join array of words back into string
}

/**
 * Determines if the given string can be converted to a valid number.
 * @param {string} string - The string to check.
 * @returns {boolean} - True if the string can be converted to a number, false otherwise.
 */
export function stringIsADate(string: string) {
  const date = new Date(string)
  return date instanceof Date && !isNaN(date.getTime())
}

/**
 * Check if a given string can be converted to a number or not
 * @param {string} string - The string to be checked
 * @returns {boolean} Returns true if the string can be converted to a number, false otherwise
 */
export function stringIsANumber(string: string) {
  return !isNaN(Number(string))
}

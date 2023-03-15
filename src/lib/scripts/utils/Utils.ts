export function subYears(date: Date, years: number): Date {
  return new Date(date.getFullYear() - years, date.getMonth(), date.getDate())
}

export function convertCamelCaseToTitleCase(stringToConvert: string): string {
  return stringToConvert
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Insert space before capital letters
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2') // Insert space between consecutive capital letters
    .split(' ') // Split string into array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
    .join(' ') // Join array of words back into string
}

export function stringIsADate(string: string) {
  const date = new Date(string)
  return date instanceof Date && !isNaN(date.getTime())
}

export function stringIsANumber(string: string) {
  return !isNaN(Number(string))
}
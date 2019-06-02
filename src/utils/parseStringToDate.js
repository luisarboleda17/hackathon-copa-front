/**
 * Parse date string to date object
 * Format: dd/mm/yyyy
 * @param year
 * @param month
 * @param day
 */
export default (year, month, day) => {
  if (year && month && day) {
    return new Date(
      parseInt(year, 10),
      parseInt(month - 1, 10),
      parseInt(day, 10)
    );
  } else {
    throw new Error('INVALID_DATE_ARGUMENTS');
  }
};
/**
 * Parse date string to date object
 * Format: dd/mm/yyyy
 * @param date
 */
export default (date) => {
  if (date.toString().match(/^\d{2}\/\d{2}\/\d{4}$/)) {
    const dateParts = date.toString().split('/');
    if (dateParts && dateParts.length === 3) {
      return new Date(
        parseInt(dateParts[2], 10),
        parseInt(dateParts[0] - 1, 10),
        parseInt(dateParts[1], 10)
      );
    } else {
      throw new Error('INVALID_DATE_FORMAT');
    }
  } else {
    throw new Error('INVALID_DATE_FORMAT');
  }
};
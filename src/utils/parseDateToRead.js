
const MONTHS = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
];

/**
 * Parse month number to string
 * @param month
 */
const parseMonth = month => {
  if (month >= 0 && month <= 11) {
    return MONTHS[month];
  } else {
    return month;
  }
};

/**
 * Parse date string to date object
 * Format: dd/mm/yyyy
 * @param date
 */
export default (date) => {
  if (date) {
    return parseMonth(date.getMonth()) + ' ' + date.getDate() + ', ' + date.getFullYear();
  } else {
    throw new Error('INVALID_DATE');
  }
};
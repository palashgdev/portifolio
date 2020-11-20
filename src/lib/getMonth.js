/**
 * @description get the monthName
 * @param {Number} month - from 0 - 11
 * @returns String
 */
export const getMonthName = month => {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return monthNames[month];
};

export default getMonthName;

/**
 * A function to reformat a date string to dd/mm/yyyy
 * @param {date} created A date object to be reformatted
 * @returns The reformatted date
 */
function fixDate(created) {
  const day = created.slice(8, 10);
  const month = created.slice(5, 7);
  const year = created.slice(0, 4);
  const date = day + "/" + month + "/" + year;

  return date;
}

export default fixDate;

function fixDate(created) {
  const day = created.slice(8, 10);
  const month = created.slice(5, 7);
  const year = created.slice(0, 4);
  const date = day + "/" + month + "/" + year;

  return date;
}

export default fixDate;

function getBooked(start, end) {
  const booked = [];
  const startDate = new Date(start);
  const endDate = new Date(end);
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const days = Math.floor((endDate - startDate) / millisecondsPerDay);
  for (let i = 0; i < days + 1; i++) {
    let date;
    if (i === 0) {
      date = startDate;
    } else if (i === days) {
      date = endDate;
    } else {
      date = new Date(startDate.getTime() + i * millisecondsPerDay);
    }

    const exists = booked.some((bookedDate) => isSameDate(bookedDate, date));
    if (!exists) {
      booked.push(date);
    }
  }
  return booked;
}

function isSameDate(date1, date2) {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

export default getBooked;

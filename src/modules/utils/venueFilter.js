export default function venueFilter(data, search) {
  const searchResult = data.filter((item) => {
    return item.name.includes(search.venue) && item.maxGuests >= search.guests;
  });
  return searchResult;
}

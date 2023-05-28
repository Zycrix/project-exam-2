export default function venueFilter(data, search) {
  const searchResult = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.venue.toLowerCase()) &&
      item.maxGuests >= Number(search.guests)
    );
  });
  return searchResult;
}

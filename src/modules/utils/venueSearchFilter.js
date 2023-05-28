/**
 * A function to search for a venue based on venue name and number of guests
 * @param {array} data The data array to search
 * @param {object} search The search object containing the search parameters
 * @returns The search result
 */
export default function venueFilter(data, search) {
  const searchResult = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.venue.toLowerCase()) &&
      item.maxGuests >= Number(search.guests)
    );
  });
  return searchResult;
}

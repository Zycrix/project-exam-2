/**
 * A function to sort the array based on ratings and return only 10 of the top rated venues
 * @param {array} data The data to be filtered
 * @returns An array containing 10 of the top rated venues
 */
export default function ratingFilter(data) {
  if (data.errors) return false;
  const copy = data.slice();
  const filterResult = copy.sort((a, b) => {
    return b.rating - a.rating;
  });

  const topRated = [];
  filterResult.forEach((item) => {
    if (item.rating > 4) {
      topRated.push(item);
    }
  });

  return topRated.slice(0, 10);
}

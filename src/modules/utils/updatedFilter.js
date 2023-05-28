/**
 * A function to sort the data array based on the date posted and return only the 12 most recent posts
 * @param {array} data The data to be filtered
 * @returns The 12 most recent posts
 */
export default function updatedFilter(data) {
  const copy = data.slice();
  const filterResult = copy.sort((a, b) => {
    return new Date(b.posted) - new Date(a.posted);
  });

  return filterResult.slice(0, 12);
}

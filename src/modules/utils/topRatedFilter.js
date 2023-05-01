export default function ratingFilter(data) {
  const copy = data.slice();
  const filterResult = copy.sort((a, b) => {
    return b.rating - a.rating;
  });

  const topRated = [];
  filterResult.forEach((item) => {
    if (item.rating > 3) {
      topRated.push(item);
    }
  });

  return topRated;
}

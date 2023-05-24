export default function updatedFilter(data) {
  const copy = data.slice();
  const filterResult = copy.sort((a, b) => {
    return new Date(b.posted) - new Date(a.posted);
  });

  return filterResult.slice(0, 12);
}

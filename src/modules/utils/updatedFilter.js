export default function updatedFilter(data) {
  const copy = data.slice();
  const filterResult = copy.sort((a, b) => {
    return new Date(b.updatedAt) - new Date(a.updatedAt);
  });

  return filterResult.slice(0, 10);
}

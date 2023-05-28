import callApi from "./apiCall";
import url from "./urls/specific";

/**
 * Function to fetch all venues from the api
 * @returns Object containing all venues
 */
async function fetchAllVenues() {
  let offSet = 0;
  const results = [];
  for (let i = 0; i < 15; i++) {
    const result = await callApi(
      url + `?offset=${offSet}&limit=100`,
      "GET",
      null
    );
    result.forEach((venue) => {
      results.push(venue);
    });
    offSet += 100;
    if (result.length > 99) {
      continue;
    }
    break;
  }
  return results;
}

export default fetchAllVenues;

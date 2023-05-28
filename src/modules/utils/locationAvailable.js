/**
 * A function to check if location data is available
 * @param {object} data The data object to be checked
 * @returns A boolean value indicating if location data is available
 */

function locationAvailable(data) {
  if (
    data.location?.address !== "Unknown" ||
    data.location?.city !== "Unknown" ||
    data.location.country !== "Unknown" ||
    data.location.continent !== "Unknown" ||
    data.location.zip !== "Unknown"
  ) {
    return true;
  } else {
    return false;
  }
}

export default locationAvailable;

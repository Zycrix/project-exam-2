import specificUrl from "./urls/specific";
import apiCall from "./apiCall";

/**
 * A function to delete a venue
 * @param {string} id The id of the venue to be deleted
 */
async function handleDelete(id) {
  const endpoint = specificUrl + id;
  const result = await apiCall(endpoint, "DELETE", null);
  if (!result?.errors) {
    window.location.reload();
  }
}

export default handleDelete;

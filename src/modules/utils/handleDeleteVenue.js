import specificUrl from "./urls/specific";
import apiCall from "./apiCall";
async function handleDelete(id) {
  const endpoint = specificUrl + id;
  const result = await apiCall(endpoint, "DELETE", null);
  if (result.status === 200) {
    window.location.reload();
  }
}

export default handleDelete;

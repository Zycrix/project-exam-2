/**
 * Reusable api call function for when api calls need to be called conditionally
 * @param {string} url Endpoint to call
 * @param {string} method HTTP method to use
 * @param {object} body Body of the request
 * @returns The response from the api call
 */
async function callApi(url, method, body) {
  try {
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (
      window.localStorage.getItem("token") ||
      window.sessionStorage.getItem("token")
    ) {
      options.headers["Authorization"] =
        "Bearer " +
        (window.localStorage.getItem("token") ||
          window.sessionStorage.getItem("token"));
    }
    if (body) {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(url, options);
    if (method === "DELETE" && response.ok) {
      return true;
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return e;
  }
}

export default callApi;

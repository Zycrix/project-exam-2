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
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return e;
  }
}

export default callApi;

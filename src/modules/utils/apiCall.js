async function callApi(url, method, body) {
  try {
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    if (window.localStorage.getItem("token")) {
      options.headers["Authorization"] =
        "Bearer " + window.localStorage.getItem("token");
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

import { useState, useEffect } from "react";

/**
 * Api call hook to handle api calls
 * @param {string} url Endpoint to call
 * @param {string} method Method to use
 * @param {object} body Request body
 * @returns The data, loading, error and error message
 */

function useApi(url, method, body) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const options = {
          method: method,
          headers: {
            "Content-Type": "application/json",
          },
        };

        if (body !== null) {
          options.body = JSON.stringify(body);
        }
        if (
          window.localStorage.getItem("token") ||
          window.sessionStorage.getItem("token")
        ) {
          options.headers.Authorization = `Bearer ${
            window.localStorage.getItem("token") ||
            window.sessionStorage.getItem("token")
          }`;
        }
        setLoading(true);
        setError(false);

        const data = await fetch(url, options);
        const json = await data.json();
        setData(json);
      } catch (e) {
        console.log(e);
        setError(true);
        setErrorMessage(e.message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [url, method, body]);
  return { data, setData, loading, error, errorMessage };
}

export default useApi;

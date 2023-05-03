import { useState, useEffect } from "react";

function useApi(url, method, body) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function getData() {
      if (window.localStorage.getItem("data")) {
        setData(JSON.parse(window.localStorage.getItem("data")));
        console.log("Storage");
        return { data, loading, error, errorMessage };
      } else {
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

          setLoading(true);
          setError(false);

          const data = await fetch(url, options);
          const json = await data.json();
          setData(json);
          console.log("api");
          // window.localStorage.setItem("data", JSON.stringify(json));
        } catch (e) {
          console.log(e);
          setError(true);
          setErrorMessage(e.message);
        } finally {
          setLoading(false);
        }
      }
    }
    getData();
  }, [url]);
  return { data, loading, error, errorMessage };
}

export default useApi;

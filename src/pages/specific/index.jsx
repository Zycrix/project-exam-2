import React from "react";
import useApi from "../../modules/hooks/useApi";
import url from "../../modules/utils/urls/specific";
import Specific from "../../modules/components/specific";

function App() {
  const id = window.location.pathname.split("/")[2];
  const endpoint = `${url}${id}`;
  console.log(endpoint);
  const { data, loading, error, errorMessage } = useApi(endpoint, "GET", null);
  console.log("errormessage", errorMessage);
  console.log(data);
  console.log(error);
  return <div>{loading ? <p>Loading...</p> : <Specific data={data} />}</div>;
}

export default App;

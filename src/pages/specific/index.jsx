import React from "react";
import useApi from "../../modules/hooks/useApi";
import url from "../../modules/utils/urls/specific";
import Specific from "../../modules/components/specific";

function App() {
  const id = window.location.href.split("/")[5];
  const endpoint = `${url}${id}?_bookings=true&_owner=true`;
  const { data, loading } = useApi(endpoint, "GET", null);
  const title = document.querySelector("title");
  title.innerHTML = `Holidaze | ${data.name}`;

  return (
    <div>{loading ? <p>Loading...</p> : <Specific data={data} id={id} />}</div>
  );
}
export default App;

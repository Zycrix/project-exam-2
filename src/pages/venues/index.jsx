import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import * as c from "../../modules/styles/common";
import fetchAll from "../../modules/utils/fetchAll";
import VenueContainer from "../../modules/components/venueContainer";
import VenueFilter from "../../modules/components/venueFilter";

function App() {
  const location = useLocation();
  const title = document.querySelector("title");
  const [data, setData] = useState();
  const [header, setHeader] = useState("All venues");
  const search = new URLSearchParams(location.search);
  const source = search.get("source");

  useEffect(() => {
    if (source === "search") {
      const searchResult = JSON.parse(
        window.sessionStorage.getItem("searchResults")
      );
      setData(searchResult);
      setHeader("Search results");
    } else {
      const getData = async () => {
        const result = await fetchAll();
        setData(result);
      };
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  title.innerHTML = "Holidaze | Venues";
  return (
    <div>
      <c.MainHeading>{header}</c.MainHeading>
      <VenueFilter />
      {data ? <VenueContainer data={data} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;

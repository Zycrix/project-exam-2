import React, { useState } from "react";
import * as s from "../../modules/styles/home";
import * as c from "../../modules/styles/common";
import VenueSearch from "./components/venueSearch";
import useApi from "../../modules/hooks/useApi";
import venueFilter from "../../modules/utils/topRatedFilter";
import TopRated from "../../modules/components/topRated";
import Recent from "../../modules/components/recent";
import url from "../../modules/utils/urls/allVenues";
import callApi from "../../modules/utils/apiCall";

function App() {
  const title = document.querySelector("title");
  title.innerHTML = "Holidaze | Home";
  let endpoint = url;

  const { data, setData, loading, error, errorMessage } = useApi(
    endpoint,
    "GET",
    null
  );

  async function getAllResults() {
    if (data.length === 100) {
      let offset = 100;
      for (let i = 0; i < 20; i++) {
        endpoint = url + `&offset=${offset}`;
        const response = await callApi(endpoint, "GET", null);
        setData([...data, ...response]);
        offset += 100;
        if (response.length < 100) {
          break;
        }
      }
    }
  }
  getAllResults();
  const topRated = venueFilter(data);
  return (
    <>
      <div>
        <c.MainHeading>Welcome to Holidaze!</c.MainHeading>
        <c.CenteredText>Find your next adventure</c.CenteredText>
      </div>
      <s.VenueSearchContainer>
        <VenueSearch data={data} />
      </s.VenueSearchContainer>
      <TopRated data={topRated} />
      <Recent data={data} />
    </>
  );
}

export default App;

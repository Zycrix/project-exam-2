import React, { useState } from "react";
import * as s from "../../styles/home";
import * as c from "../../styles/common";
import VenueSearch from "./components/venueSearch";
import useApi from "../../hooks/useApi";
import venueFilter from "../../utils/topRatedFilter";

function App() {
  const { data, loading, error, errorMessage } = useApi(
    "https://api.noroff.dev/api/v1/holidaze/venues",
    "GET",
    null
  );
  const sorted = venueFilter(data);
  console.log(sorted);
  return (
    <>
      <div>
        <c.MainHeading>Welcome to Holidaze!</c.MainHeading>
        <c.CenteredText>Find your next adventure</c.CenteredText>
      </div>
      <s.VenueSearchContainer>
        <VenueSearch data={data} />
      </s.VenueSearchContainer>
    </>
  );
}

export default App;

import React, { useState } from "react";
import * as s from "../../modules/styles/home";
import * as c from "../../modules/styles/common";
import VenueSearch from "./components/venueSearch";
import useApi from "../../modules/hooks/useApi";
import venueFilter from "../../modules/utils/topRatedFilter";
import TopRated from "../../modules/components/topRated";
import Recent from "../../modules/components/recent";

function App() {
  const { data, loading, error, errorMessage } = useApi(
    "https://api.noroff.dev/api/v1/holidaze/venues?sort=updated",
    "GET",
    null
  );
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

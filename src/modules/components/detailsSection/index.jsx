import React from "react";
import * as s from "../../styles/specific";
import fixDate from "../../utils/fixDate";
import locationAvailable from "../../utils/locationAvailable";
function App(props) {
  const data = props.data;
  return (
    <s.DetailsContainer>
      {locationAvailable(data) ? (
        <>
          <h2>Location:</h2>
          <s.DetailsGrid>
            {data.location.address !== "Unknown" ? (
              <>
                <div>Address:</div>
                <div>{data.location.address}</div>
              </>
            ) : null}
            {data.location.city !== "Unknown" ? (
              <>
                <div>City:</div>
                <div>{data.location.city}</div>
              </>
            ) : null}
            {data.location.county !== "Unknown" ? (
              <>
                <div>Country:</div>
                <div>{data.location.country}</div>
              </>
            ) : null}
            {data.location.continent !== "Unknown" ? (
              <>
                <div>Continent:</div>
                <div>{data.location.continent}</div>
              </>
            ) : null}
            {data.location.zip !== "Unknown" ? (
              <>
                <div>Zip:</div>
                <div>{data.location.zip}</div>
              </>
            ) : null}
          </s.DetailsGrid>
        </>
      ) : null}
      <h2>Details:</h2>
      <s.DetailsGrid>
        <div>Created:</div>
        <div>{fixDate(data.created)}</div>
        <div>Last updated:</div>
        <div>{fixDate(data.updated)}</div>
        <div>Max guests:</div>
        <div>{data.maxGuests}</div>
        <div>Wifi:</div>
        <div>{data.meta.wifi ? "Included" : "Not included"}</div>
        <div>Parking:</div>
        <div>{data.meta.parking ? "Included" : "Not included"}</div>
        <div>Breakfast:</div>
        <div>{data.meta.breakfast ? "Included" : "Not included"}</div>
        <div>Pets:</div>
        <div>{data.meta.pets ? "Allowed" : "Not allowed"}</div>
      </s.DetailsGrid>
    </s.DetailsContainer>
  );
}

export default App;

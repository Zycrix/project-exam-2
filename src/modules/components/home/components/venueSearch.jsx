import React, { useState, useEffect } from "react";
import * as s from "../../../styles/home";
import * as c from "../../../styles/common";
import venueFilter from "../../../utils/venueSearchFilter";

function App(props) {
  const [venues, setVenues] = useState("");
  const [guests, setGuests] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const searchParams = {
      venue: venues,
      guests: guests,
    };
    if (guests === "") {
      searchParams.guests = 0;
    }
    const filteredVenues = venueFilter(props.data, searchParams);
    console.log(filteredVenues);
  }
  return (
    <form>
      <input
        placeholder="Enter your destination (required)"
        type="text"
        name="venue"
        id="venue"
        value={venues}
        onChange={(e) => setVenues(e.target.value)}
        required
      />
      <input
        placeholder="Number of guests (optional)"
        type="number"
        name="guests"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
      <c.FormButton onClick={(e) => handleSubmit(e)}>
        Search venues
      </c.FormButton>
    </form>
  );
}

export default App;

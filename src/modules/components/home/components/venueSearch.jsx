import React, { useState } from "react";
import * as s from "../../../styles/home";
import * as c from "../../../styles/common";

function App() {
  const [venues, setVenues] = useState();
  const [guests, setGuests] = useState();

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
      <c.FormButton>Search venues</c.FormButton>
    </form>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import * as c from "../../../modules/styles/common";
import venueFilter from "../../../modules/utils/venueSearchFilter";
import { useNavigate } from "react-router-dom";
import fetchAllVenues from "../../../modules/utils/fetchAll";
/**
 * A function to create the venue search component
 * @returns The venue search component
 */
function App() {
  const [venues, setVenues] = useState("");
  const [guests, setGuests] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();
  const [statusMessage, setStatusMessage] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    const call = async () => {
      const response = await fetchAllVenues();
      setData(response);
    };
    call();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (venues === "") {
      setErrorMessage(true);
      return;
    }
    setErrorMessage(false);
    setStatusMessage("");
    const searchParams = {
      venue: venues,
      guests: guests,
    };
    if (guests === "") {
      searchParams.guests = 0;
    }
    const filteredVenues = venueFilter(data, searchParams);
    if (filteredVenues.length === 0) {
      setStatusMessage("No venues found");
      return;
    } else if (filteredVenues.length > 0) {
      window.sessionStorage.setItem(
        "searchResults",
        JSON.stringify(filteredVenues)
      );
      navigate(`/venues?source=search`);
    }
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <p className="error">
        {errorMessage ? "Please enter a venue name" : statusMessage}
      </p>
      <input
        placeholder="Search for venues by name"
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
      <c.FormButton type="submit">Search venues</c.FormButton>
    </form>
  );
}

export default App;

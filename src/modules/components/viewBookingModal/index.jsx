import React, { useEffect, useState } from "react";
import * as c from "../../styles/common";
import * as s from "../../styles/profile";
import callApi from "../../utils/apiCall";
import url from "../../utils/urls/specific";
import fixDate from "../../utils/fixDate";
function App({ id, close }) {
  const [venue, setVenue] = useState(null);
  const endpoint = url + id;
  function closeModal() {
    close();
  }

  useEffect(() => {
    async function getVenue() {
      const result = await callApi(endpoint + "?_bookings=true", "GET", null);
      setVenue(result);
    }
    getVenue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <s.OverlayContent>
      <s.CloseContainer>
        <c.CleanButton onClick={(e) => closeModal()}>
          <span className="material-symbols-outlined">close</span>
        </c.CleanButton>
      </s.CloseContainer>
      <c.SecondaryHeading>Bookings:</c.SecondaryHeading>
      {venue?.bookings?.length > 0 ? (
        venue.bookings.map((booking) => {
          return (
            <s.BookingContainer key={booking.id}>
              <div className="flex">
                <p>From: </p>
                <p>{fixDate(booking.dateFrom)}</p>
              </div>
              <div className="flex">
                <p>To: </p>
                <p>{fixDate(booking.dateTo)}</p>
              </div>
              <div className="flex">
                <p>Guests: </p>
                <p>{booking.guests}</p>
              </div>
            </s.BookingContainer>
          );
        })
      ) : (
        <p>No bookings</p>
      )}
    </s.OverlayContent>
  );
}

export default App;

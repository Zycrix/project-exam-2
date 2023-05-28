import React from "react";
import * as s from "../../styles/profile";
import * as c from "../../styles/common";
import handleOptions from "../../utils/toggleOptionsDropdown";
import apiCall from "../../utils/apiCall";
import bookingUrl from "../../utils/urls/bookings";
import fixDate from "../../utils/fixDate";
import placeholderImg from "../../../media/placeholder-img.gif";

/**
 * Function to create the bookings section component
 * @param {object} data Object that contains the user data
 * @param {boolean} user Boolean that indicates if the user is viewing they're own profile
 * @param {function} handleView Function that handles the view booking modal
 * @param {function} handleEditBooking Function that handles the edit booking modal
 * @param {function} setData Function that updates the data state
 * @returns The bookings section component
 */
function App({ data, user, handleView, handleEditBooking, setData }) {
  async function handleCancel(id) {
    const response = await apiCall(bookingUrl + id, "DELETE", null);
    if (response) {
      const newBookings = data.bookings.filter((item) => item.id !== id);
      setData({ ...data, bookings: newBookings });
    }
  }

  return (
    <s.BookingSection show={data?.bookings?.length > 0 ? true : false}>
      <c.SecondaryHeading>
        {user ? "Your bookings" : `${data?.name}'s bookings`}
      </c.SecondaryHeading>
      {data?.bookings?.length > 0
        ? data.bookings.map((booking) => (
            <s.BookingCard key={booking.id}>
              <div className="venue-img-container">
                <img
                  src={booking.venue.media[0] || placeholderImg}
                  alt="venue"
                />
              </div>
              <div className="info">
                <div className="flex">
                  <h3>{booking.venue.name}</h3>
                  {user ? (
                    <div className="options">
                      <c.CleanButton
                        onClick={(e) => handleOptions(e)}
                        data-id={booking.id}
                      >
                        <span
                          className="material-symbols-outlined"
                          data-id={booking.id}
                        >
                          more_vert
                        </span>
                      </c.CleanButton>
                      <s.OptionsOverlay
                        className="options-dropdown"
                        data-id={booking.id}
                      >
                        <ul>
                          <li>
                            <c.CleanButton
                              onClick={() => {
                                handleView(booking.venue.id);
                              }}
                            >
                              View venue
                            </c.CleanButton>
                          </li>
                          <li>
                            <c.CleanButton
                              onClick={(e) => handleEditBooking(booking.id)}
                            >
                              Update booking
                            </c.CleanButton>
                          </li>
                          <li>
                            <c.CleanButton
                              onClick={(e) => {
                                handleCancel(booking.id);
                              }}
                            >
                              Cancel booking
                            </c.CleanButton>
                          </li>
                        </ul>
                      </s.OptionsOverlay>
                    </div>
                  ) : null}
                </div>
                <c.Text>Period: </c.Text>
                <div className="flex">
                  <c.Text>
                    {fixDate(booking.dateFrom)} - {fixDate(booking.dateTo)}
                  </c.Text>
                </div>
                <s.Margin>
                  <c.Text>Guests: </c.Text>
                  <div className="flex">
                    <c.Text>{booking.guests}</c.Text>
                  </div>
                </s.Margin>
              </div>
            </s.BookingCard>
          ))
        : null}
    </s.BookingSection>
  );
}

export default App;

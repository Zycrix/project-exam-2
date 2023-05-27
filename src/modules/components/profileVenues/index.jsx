import React from "react";
import * as s from "../../styles/profile";
import * as c from "../../styles/common";
import handleOptions from "../../utils/toggleOptionsDropdown";
import handleDelete from "../../utils/handleDeleteVenue";
import placeholderImg from "../../../media/placeholder-img.gif";
function App({ data, user, handleView, handleViewBookings, handleUpdate }) {
  return (
    <s.VenueSection show={data.venueManager}>
      <c.SecondaryHeading>
        {user ? "Your venues" : `${data?.name}'s Venues`}
      </c.SecondaryHeading>
      {data?.venues?.length > 0 ? (
        data.venues.map((venue) => (
          <s.VenueCard key={venue.id}>
            <div className="venue-img-container">
              <img src={venue.media[0] || placeholderImg} alt="venue" />
            </div>
            <div className="info">
              <h3>{venue.name.slice(0, 30)}</h3>
              {user ? (
                <div className="options">
                  <c.CleanButton
                    onClick={(e) => handleOptions(e)}
                    data-id={venue.id}
                  >
                    <span
                      className="material-symbols-outlined"
                      data-id={venue.id}
                    >
                      more_vert
                    </span>
                  </c.CleanButton>
                  <s.OptionsOverlay
                    className="options-dropdown"
                    data-id={venue.id}
                  >
                    <ul>
                      <li>
                        <c.CleanButton
                          onClick={() => {
                            handleView(venue.id);
                          }}
                        >
                          View venue
                        </c.CleanButton>
                      </li>
                      <li>
                        <c.CleanButton
                          onClick={(e) => handleViewBookings(venue.id)}
                        >
                          View bookings
                        </c.CleanButton>
                      </li>
                      <li>
                        <c.CleanButton
                          onClick={(e) => {
                            handleUpdate(e, venue.id);
                          }}
                        >
                          Update venue
                        </c.CleanButton>
                      </li>
                      <li>
                        <c.CleanButton
                          onClick={(e) => {
                            handleDelete(venue.id);
                          }}
                        >
                          Delete venue
                        </c.CleanButton>
                      </li>
                    </ul>
                  </s.OptionsOverlay>
                </div>
              ) : null}
              <div className="flex">
                <c.Text>Rating:</c.Text>
                <c.Text>{venue.rating}/5</c.Text>
              </div>
              <div className="flex">
                <c.Text>Price:</c.Text>
                <c.Text>{venue.price}$</c.Text>
              </div>
            </div>
          </s.VenueCard>
        ))
      ) : (
        <c.Text>No venues registered</c.Text>
      )}
    </s.VenueSection>
  );
}

export default App;

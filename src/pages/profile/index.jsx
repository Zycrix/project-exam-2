import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../../modules/hooks/useApi";
import url from "../../modules/utils/urls/profile";
import * as s from "../../modules/styles/profile";
import * as c from "../../modules/styles/common";
import apiCall from "../../modules/utils/apiCall";
import fixDate from "../../modules/utils/fixDate";
import bookingUrl from "../../modules/utils/urls/bookings";

function App() {
  const name = window.location.pathname.split("/")[2];
  const endpoint = url + name + "?_bookings=true&_venues=true";
  const userName = window.sessionStorage.getItem("name");
  const [editModal, setEditModal] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [preview, setPreview] = useState(false);
  const [user, setUser] = useState(false);
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();
  const { data, setData, loading, error, errorMessage } = useApi(
    endpoint,
    "GET",
    null
  );
  const title = document.querySelector("title");
  title.innerHTML = `Holidaze | ${name}'s profile`;

  useEffect(() => {
    if (userName === name) {
      setUser(true);
    }
  }, [data]);
  function handlePreview(e) {
    e.preventDefault();
    setPreview(!preview);
  }

  async function handleAvatarChange(e) {
    e.preventDefault();
    const body = {
      avatar: avatar,
    };
    const avatarEndpoint = url + name + "/media";
    const response = await apiCall(avatarEndpoint, "PUT", body);
    if (response.avatar === avatar) {
      setData({ avatar: avatar });
    }
  }
  function handleView(id) {
    navigate("/specific/" + id);
  }

  async function handleCancel(id) {
    const response = await apiCall(bookingUrl + id, "DELETE", null);
    if (response) {
      const newBookings = data.bookings.filter((item) => item.id !== id);
      setData({ ...data, bookings: newBookings });
    }
  }

  function handleOptions(e) {
    e.preventDefault();
    const dropdown = document.querySelectorAll(".options-dropdown");
    const newArray = Array.from(dropdown);
    const targetDropdown = newArray.filter(
      (item) => item.dataset.id === e.target.dataset.id
    );
    targetDropdown[0].classList.toggle("show");
  }
  return (
    <s.Container reload={reload}>
      <div className="img-container">
        <img src={data.avatar} alt="profile" />
        <s.EditContainer className="overlay" show={user}>
          <c.CleanButton onClick={(e) => setEditModal(true)}>
            <span className="material-symbols-outlined">edit</span>
          </c.CleanButton>
        </s.EditContainer>
      </div>
      <c.MainHeading>{data.name}</c.MainHeading>
      <c.Text>{data.email}</c.Text>
      <c.Text>{data.venueManager ? "Venue manager" : null}</c.Text>
      <s.VenueSection show={data.venueManager}>
        <c.MainHeading>Venues</c.MainHeading>
        {data?.venues?.length > 0 ? (
          data.venues.map((venue) => (
            <s.VenueCard key={venue.id}>
              <div className="venue-img-container">
                <img src={venue.media[0]} alt="venue" />
              </div>
              <div className="info">
                <h3>{venue.name.slice(0, 30)}</h3>
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
      <s.BookingSection show={data?.bookings?.length > 0 ? true : false}>
        <c.SecondaryHeading>Bookings</c.SecondaryHeading>
        {data?.bookings?.length > 0
          ? data.bookings.map((booking) => (
              <s.BookingCard key={booking.id}>
                <div className="venue-img-container">
                  <img src={booking.venue.media[0]} alt="venue" />
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
                              <c.CleanButton>Update booking</c.CleanButton>
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
                </div>
              </s.BookingCard>
            ))
          : null}
      </s.BookingSection>
      <s.Overlay show={editModal}>
        <s.OverlayContent>
          <s.CloseContainer>
            <c.CleanButton onClick={(e) => setEditModal(false)}>
              <span className="material-symbols-outlined">close</span>
            </c.CleanButton>
          </s.CloseContainer>
          <h2>Change avatar</h2>
          <form onSubmit={(e) => handleAvatarChange(e)}>
            <c.StandardInput
              type="text"
              placeholder="Avatar URL"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
            <c.PrimaryButton>Save</c.PrimaryButton>
          </form>
          <hr />
          <c.SecondaryButton onClick={(e) => handlePreview(e)}>
            Preview
          </c.SecondaryButton>
          <s.PreviewContainer show={preview}>
            <s.ImgContainer>
              <img src={avatar} alt="preview" />
            </s.ImgContainer>
          </s.PreviewContainer>
        </s.OverlayContent>
      </s.Overlay>
    </s.Container>
  );
}

export default App;

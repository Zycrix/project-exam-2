import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../../modules/hooks/useApi";
import url from "../../modules/utils/urls/profile";
import * as s from "../../modules/styles/profile";
import * as c from "../../modules/styles/common";
import apiCall from "../../modules/utils/apiCall";
import EditVenueFrom from "../../modules/components/editVenueForm";
import BookingModal from "../../modules/components/viewBookingModal";
import EditAvatarModal from "../../modules/components/editAvatarModal";
import EditBookingModule from "../../modules/components/editBookingModule";
import ProfileBookings from "../../modules/components/profileBookings";
import ProfileVenues from "../../modules/components/profileVenues";

function App() {
  const name = window.location.href.split("/")[5];
  const endpoint = url + name + "?_bookings=true&_venues=true";
  const userName = window.sessionStorage.getItem("name");
  const [avatarModal, setAvatarModal] = useState(false);
  const [venueModal, setVenueModal] = useState(false);
  const [bookingModal, setBookingModal] = useState(false);
  const [venueId, setVenueId] = useState("");
  const [avatar, setAvatar] = useState("");
  const [user, setUser] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [editBookingModal, setEditBookingModal] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { data, setData } = useApi(endpoint, "GET", null);
  const title = document.querySelector("title");
  title.innerHTML = `Holidaze | ${name}'s profile`;
  console.log(data);
  useEffect(() => {
    if (data?.status === "Unauthorized") {
      setError(true);
    }
  }, [data]);

  useEffect(() => {
    if (userName === name) {
      setUser(true);
    }
  }, [name, userName]);

  async function handleAvatarChange(e) {
    e.preventDefault();
    const body = {
      avatar: avatar,
    };
    const avatarEndpoint = url + name + "/media";
    const response = await apiCall(avatarEndpoint, "PUT", body);
    if (response.avatar === avatar) {
      data.avatar = response.avatar;
      setAvatarModal(!avatarModal);
      setAvatar("");
    }
  }
  function handleView(id) {
    navigate("/specific/" + id);
  }

  function handleUpdate(e, id) {
    setVenueModal(!venueModal);
    setVenueId(id);
  }

  const handleViewBookings = (id) => {
    setBookingModal(!bookingModal);
    setBookingId(id);
  };

  const avatarChange = () => {
    setAvatarModal(!avatarModal);
  };

  const handleAvatar = (val) => {
    setAvatar(val);
  };

  const handleEditBooking = (id) => {
    setEditBookingModal(!editBookingModal);
    setBookingId(id);
  };

  return (
    <>
      {error === true ? (
        <c.ErrorContainer>
          <c.MainHeading>Please log in to view this page</c.MainHeading>
          <div>
            <c.PrimaryButton onClick={() => navigate("/login")}>
              Log in
            </c.PrimaryButton>
          </div>
        </c.ErrorContainer>
      ) : (
        <s.Container>
          <div className="info-container">
            <div className="img-container">
              <img src={data.avatar} alt="profile" />
              <s.EditContainer className="overlay" show={user}>
                <c.CleanButton onClick={(e) => setAvatarModal(true)}>
                  <span className="material-symbols-outlined">edit</span>
                </c.CleanButton>
              </s.EditContainer>
            </div>
            <c.MainHeading>{data.name}</c.MainHeading>
            <c.Text>{data.email}</c.Text>
            <c.Text>{data.venueManager ? "Venue manager" : null}</c.Text>
          </div>
          <div className="section-container">
            <ProfileVenues
              data={data}
              user={user}
              handleView={handleView}
              handleViewBookings={handleViewBookings}
              handleUpdate={handleUpdate}
            />
            <ProfileBookings
              data={data}
              user={user}
              handleView={handleView}
              handleEditBooking={handleEditBooking}
              setData={setData}
            />
          </div>
          <s.Overlay show={avatarModal}>
            {avatarModal ? (
              <EditAvatarModal
                handler={handleAvatarChange}
                toggle={avatarChange}
                avatar={avatar}
                changeAvatar={handleAvatar}
              />
            ) : null}
          </s.Overlay>
          <s.Overlay show={venueModal}>
            <s.OverlayContent>
              <s.CloseContainer>
                <c.CleanButton onClick={(e) => setVenueModal(false)}>
                  <span className="material-symbols-outlined">close</span>
                </c.CleanButton>
              </s.CloseContainer>
              <h2>Edit Venue</h2>
              <EditVenueFrom id={venueId} data={data.venues || []} />
            </s.OverlayContent>
          </s.Overlay>
          <s.Overlay show={bookingModal}>
            {bookingModal ? (
              <BookingModal id={bookingId} close={handleViewBookings} />
            ) : null}
          </s.Overlay>
          <s.Overlay show={editBookingModal}>
            {editBookingModal ? (
              <EditBookingModule id={bookingId} close={handleEditBooking} />
            ) : null}
          </s.Overlay>
        </s.Container>
      )}
    </>
  );
}

export default App;

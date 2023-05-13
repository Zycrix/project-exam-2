import React, { useState, useEffect } from "react";
import useApi from "../../modules/hooks/useApi";
import url from "../../modules/utils/urls/profile";
import * as s from "../../modules/styles/profile";
import * as c from "../../modules/styles/common";
import apiCall from "../../modules/utils/apiCall";

function App() {
  const name = window.location.pathname.split("/")[2];
  const endpoint = url + name + "?_bookings=true&_venues=true";
  const userName = window.sessionStorage.getItem("name");
  const [editModal, setEditModal] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [preview, setPreview] = useState(false);
  const [user, setUser] = useState(false);
  const { data, setData, loading, error, errorMessage } = useApi(
    endpoint,
    "GET",
    null
  );

  console.log(data);

  useEffect(() => {
    if (userName === name) {
      setUser(true);
    }
  }, []);
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
  return (
    <s.Container>
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
        {data?.venues?.length > 0 ? (
          <c.MainHeading>Venues</c.MainHeading>
        ) : null}
        {data?.venues?.length > 0
          ? data.venues.map((venue) => (
              <s.VenueCard key={venue._id}>
                <div className="venue-img-container">
                  <img src={venue.media[0]} alt="venue" />
                </div>
                <div className="info">
                  <h3>{venue.name}</h3>
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
          : null}
      </s.VenueSection>
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

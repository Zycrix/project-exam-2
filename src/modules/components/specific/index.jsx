import React, { useState } from "react";
import * as c from "../../styles/common";
import * as s from "../../styles/specific";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App(props) {
  const data = props.data;
  const [BookingModal, setBookingModal] = useState(false);
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [guests, setGuests] = useState(undefined);

  function fixDate(created) {
    const day = created.slice(8, 10);
    const month = created.slice(5, 7);
    const year = created.slice(0, 4);
    const date = day + "/" + month + "/" + year;

    return date;
  }
  function locationAvailable(data) {
    if (
      data.location?.address !== "Unknown" ||
      data.location?.city !== "Unknown" ||
      data.location.country !== "Unknown" ||
      data.location.continent !== "Unknown" ||
      data.location.zip !== "Unknown"
    ) {
      return true;
    } else {
      return false;
    }
  }

  function toggleBookingModal() {
    setBookingModal(!BookingModal);
  }

  return (
    <s.Container>
      <s.ImgContainer>
        <img src={data.media?.[0]} alt="The venue" />
      </s.ImgContainer>
      <c.MainHeading>{data.name}</c.MainHeading>
      <div className="info">
        <div className="price">
          <p>Price:</p>
          <p>{data.price}$</p>
        </div>
        <div className="rating">
          <p>Rating:</p>
          <p>{data.rating}/5</p>
        </div>
      </div>
      <s.BookContainer>
        <c.PrimaryButton onClick={toggleBookingModal}>
          Book venue
        </c.PrimaryButton>
      </s.BookContainer>
      <s.Description>
        <p>{data.description}</p>
      </s.Description>
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
      <s.BookingModal show={BookingModal}>
        <s.BookingModalContent>
          <c.SecondaryHeading>Book venue</c.SecondaryHeading>
          <s.BookingForm>
            <label htmlFor="start">Start date:</label>
            <DatePicker
              id="start"
              selected={start}
              onChange={(date) => setStart(date)}
              selectsStart
              startDate={start}
              endDate={end}
              dateFormat="dd/MM/yyyy"
            />
            <label htmlFor="end">End date:</label>
            <DatePicker
              id="end"
              selected={end}
              onChange={(date) => setEnd(date)}
              selectsEnd
              startDate={start}
              endDate={end}
              minDate={start}
              dateFormat="dd/MM/yyyy"
            />
            <label htmlFor="guests">Number of guests:</label>
            <input
              type="number"
              id="guests"
              placeholder={"max guests: " + data.maxGuests}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
            <c.FormButton>Book</c.FormButton>
          </s.BookingForm>
          <s.BookingModalClose>
            <c.CleanButton onClick={toggleBookingModal}>
              <span className="material-symbols-outlined">close</span>
            </c.CleanButton>
          </s.BookingModalClose>
        </s.BookingModalContent>
      </s.BookingModal>
    </s.Container>
  );
}

export default App;

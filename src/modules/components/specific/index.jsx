import React, { useState } from "react";
import * as c from "../../styles/common";
import * as s from "../../styles/specific";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import getBooked from "../../utils/getBooked";
import callApi from "../../utils/apiCall";
import url from "../../utils/urls/bookings";
import DetailsContainer from "../detailsSection";
import OwnerSection from "../ownerSection";

function App(props) {
  const data = props.data;
  const today = new Date();
  const minDate = today.setDate(today.getDate() + 1);
  const [BookingModal, setBookingModal] = useState(false);
  const [start, setStart] = useState(minDate);
  const [end, setEnd] = useState(minDate);
  const [guests, setGuests] = useState(undefined);
  const [success, setSuccess] = useState(false);
  const booked = [];

  if (data?.bookings.length > 0) {
    const temp = [];
    for (let i = 0; i < data.bookings.length; i++) {
      const startDate = data.bookings[i].dateFrom.slice(0, 10);
      const endDate = data.bookings[i].dateTo.slice(0, 10);
      temp.push(getBooked(startDate, endDate));
    }
    temp.forEach((item) => {
      //May create duplicates if someone don't check that new bookings are not duplicates but it wont affect the function of the datepicker so im just gonna leave it like this
      item.forEach((date) => {
        booked.push(date);
      });
    });
  }

  function toggleBookingModal() {
    setBookingModal(!BookingModal);
  }

  async function handleBooking(e) {
    e.preventDefault();
    const body = {
      dateFrom: start,
      dateTo: end,
      guests: Number(guests),
      venueId: props.id,
    };
    const data = await callApi(url, "POST", body);
    if (data.id) {
      toggleBookingModal();
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 1500);
    }
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
      <DetailsContainer data={data} />
      <OwnerSection data={data.owner} />
      <s.BookingModal show={BookingModal}>
        <s.BookingModalContent>
          <c.SecondaryHeading>Book venue</c.SecondaryHeading>
          <s.BookingForm onSubmit={(e) => handleBooking(e)}>
            <label htmlFor="start">Start date:</label>
            <DatePicker
              id="start"
              selected={start}
              onChange={(date) => setStart(date)}
              selectsStart
              startDate={start}
              endDate={end}
              minDate={today}
              dateFormat="dd/MM/yyyy"
              excludeDates={booked}
              required
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
              excludeDates={booked}
              required
            />
            <label htmlFor="guests">Number of guests:</label>
            <input
              type="number"
              id="guests"
              placeholder={"max guests: " + data.maxGuests}
              value={guests}
              onChange={(e) =>
                e.target.value < data.maxGuests
                  ? setGuests(e.target.value)
                  : setGuests(data.maxGuests)
              }
              required
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
      <s.SuccessModal show={success}>
        <span className="material-symbols-outlined">done</span>
      </s.SuccessModal>
    </s.Container>
  );
}

export default App;

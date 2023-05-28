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
import placeholderImg from "../../../media/placeholder-img.gif";

/**
 * Component that returns the venue specific component
 * @param {object} props.data Data object that contains the venue data
 * @param {string} props.id Venue id
 * @returns The venue specific component
 */
function App(props) {
  const data = props.data;
  const today = new Date();
  const minDate = today.setDate(today.getDate() + 1);
  const minEnd = today.setDate(today.getDate() + 1);
  const [BookingModal, setBookingModal] = useState(false);
  const [start, setStart] = useState(minDate);
  const [end, setEnd] = useState(minEnd);
  const [guests, setGuests] = useState(undefined);
  const [success, setSuccess] = useState(false);
  const booked = [];
  let touchStart;
  let touchEnd;
  const [count, setCount] = useState(0);
  if (data?.bookings?.length > 0) {
    const temp = [];
    for (let i = 0; i < data.bookings.length; i++) {
      const startDate = data.bookings[i].dateFrom.slice(0, 10);
      const endDate = data.bookings[i].dateTo.slice(0, 10);
      temp.push(getBooked(startDate, endDate));
    }
    temp.forEach((item) => {
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
  function handleChange(date) {
    setStart(null);
    setStart(date);
    let startDate = new Date(date);
    startDate.setDate(startDate.getDate() + 1);
    setEnd(startDate);
  }

  function handleImgError(e) {
    e.target.src = placeholderImg;
  }

  function handleStart(e) {
    if (data.media.length < 2) return;
    touchStart = e.changedTouches[0].clientX;
  }

  function next() {
    if (count === data.media.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  function prev() {
    if (count === 0) {
      setCount(data.media.length - 1);
    } else {
      setCount(count - 1);
    }
  }
  function handleEnd(e) {
    if (data.media.length < 2) return;

    touchEnd = e.changedTouches[0].clientX;

    if (touchStart > touchEnd && touchStart - touchEnd > 25) {
      next();
    } else if (touchStart < touchEnd && touchEnd - touchStart > 25) {
      prev();
    }
  }

  return (
    <s.Container>
      {data?.errors ? (
        <c.Text>{data.errors[0].message}</c.Text>
      ) : (
        <>
          <s.ImgContainer
            onTouchStart={(e) => handleStart(e)}
            onTouchEnd={(e) => handleEnd(e)}
          >
            <c.PrimaryButton className="prev" onClick={() => prev()}>
              <span className="material-symbols-outlined">arrow_back</span>
            </c.PrimaryButton>
            <img
              src={data.media?.[count] || placeholderImg}
              alt="The venue"
              onError={(e) => handleImgError(e)}
              className="main-img"
            />
            <c.PrimaryButton className="next" onClick={() => next()}>
              <span className="material-symbols-outlined">arrow_forward</span>
            </c.PrimaryButton>
            {data.media.length > 1 ? (
              <s.BreadCrumbs className="breadcrumbs">
                {data.media.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={index === count ? "active" : ""}
                    ></div>
                  );
                })}
              </s.BreadCrumbs>
            ) : null}
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
                  onChange={(date) => handleChange(date)}
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
        </>
      )}
    </s.Container>
  );
}

export default App;

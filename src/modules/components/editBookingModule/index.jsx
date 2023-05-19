import React, { useState, useEffect } from "react";
import * as c from "../../styles/common";
import * as s from "../../styles/profile";
import DatePicker from "react-datepicker";
import getBooked from "../../utils/getBooked";
import callApi from "../../utils/apiCall";
import url from "../../utils/urls/bookings";

function App({ id, close, update }) {
  const today = new Date();
  const minDate = today.setDate(today.getDate() + 1);
  const [start, setStart] = useState(minDate);
  const [end, setEnd] = useState(minDate);
  const [guests, setGuests] = useState(1);
  const [data, setData] = useState(undefined);
  const booked = [];

  function handleClose() {
    close();
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await callApi(url + id, "GET");
      setData(response);
      setGuests(response.guests);
      setStart(new Date(response.dateFrom));
      setEnd(new Date(response.dateTo));
    };
    fetchData();
    console.log(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (data?.bookings?.length > 0) {
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

  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      dateFrom: new Date(start),
      dateTo: new Date(end),
      guests: guests,
    };
    const response = await callApi(url + id, "PUT", body);
    if (response?.errors) {
      console.log(response);
      return false;
    }
    //THIS SHOULD BE CHANGED TO A RERENDER RATHER THAN A RELOAD
    window.location.reload();
  }
  return (
    <s.BookingOverlay>
      <s.CloseContainer>
        <c.CleanButton onClick={(e) => handleClose()}>
          <span className="material-symbols-outlined">close</span>
        </c.CleanButton>
      </s.CloseContainer>
      <c.SecondaryHeading>Edit booking:</c.SecondaryHeading>
      {data ? (
        <form onSubmit={(e) => handleSubmit(e)}>
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
            value={guests}
            onChange={(e) =>
              e.target.value < data.maxGuests
                ? setGuests(e.target.value)
                : setGuests(data.maxGuests)
            }
            required
          />
          <c.FormButton>Book</c.FormButton>
        </form>
      ) : null}
    </s.BookingOverlay>
  );
}

export default App;

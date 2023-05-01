import React, { useEffect } from "react";
import * as c from "../../styles/common";
import * as s from "../../styles/home";

function App(props) {
  function next(e) {
    const current = document.querySelector("[data-state='active']");
    const next = document.querySelector("[data-state='next']");
    const prev = document.querySelector("[data-state='prev']");

    current.dataset.state = "prev";
    next.dataset.state = "active";
    prev.dataset.state = "";
    if (next.dataset.index < props.data.length - 1) {
      const newNext = next.nextElementSibling;
      newNext.dataset.state = "next";
    } else {
      const newNext = document.querySelector("[data-index='0']");
      newNext.dataset.state = "next";
    }
  }

  function prev(e) {
    const current = document.querySelector("[data-state='active']");
    const next = document.querySelector("[data-state='next']");
    const prev = document.querySelector("[data-state='prev']");

    current.dataset.state = "next";
    prev.dataset.state = "active";
    next.dataset.state = "";
    if (prev.dataset.index !== "0") {
      const newPrev = prev.previousElementSibling;
      newPrev.dataset.state = "prev";
    } else {
      const newPrev = document.querySelector(
        `[data-index='${props.data.length - 1}']`
      );
      newPrev.dataset.state = "prev";
    }
  }

  return (
    <s.TopRatedContainer>
      <c.SecondaryHeading>Top rated venues</c.SecondaryHeading>
      <s.SliderContainer>
        <s.SliderButton
          className="prev"
          onClick={(e) => {
            prev(e);
          }}
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </s.SliderButton>
        {props.data.map((venue, i) => {
          return (
            <s.SliderCard
              data-index={i}
              data-state={
                i === 0
                  ? "active"
                  : undefined || i === 1
                  ? "next"
                  : undefined || i === props.data.length - 1
                  ? "prev"
                  : undefined
              }
              key={venue.id}
            >
              <s.SliderCardImage>
                <img src={venue.media[0]} alt={venue.name} />
                <div class="perks">
                  {venue.meta.wifi ? <div class="wifi">WIFI</div> : null}
                  {venue.meta.parking ? (
                    <div class="parking">PARKING</div>
                  ) : null}
                  {venue.meta.breakfast ? (
                    <div class="breakfast">BREAKFAST</div>
                  ) : null}
                  {venue.meta.pets ? <div class="pets">PETS</div> : null}
                </div>
                <div class="favorite">
                  <span class="material-symbols-outlined">favorite</span>
                </div>
              </s.SliderCardImage>
              <h2>
                {venue.name.length < 23 ? venue.name : venue.name.slice(0, 23)}
              </h2>
              <div class="venue-info">
                <div class="venue-price">
                  <p>Price</p>
                  <p>{venue.price}$</p>
                </div>
                <div class="venue-rating">
                  <p>Rating</p>
                  <p>{venue.rating}/5</p>
                </div>
              </div>
              <div class="btn-container">
                <c.CardButton>View venue</c.CardButton>
              </div>
            </s.SliderCard>
          );
        })}
        <s.SliderButton
          className="next"
          onClick={(e) => {
            next(e);
          }}
        >
          <span className="material-symbols-outlined">arrow_forward</span>
        </s.SliderButton>
      </s.SliderContainer>
    </s.TopRatedContainer>
  );
}

export default App;

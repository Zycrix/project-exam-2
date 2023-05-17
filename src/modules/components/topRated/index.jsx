import React from "react";
import * as c from "../../styles/common";
import * as s from "../../styles/home";
import Card from "../card";

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
            <Card
              venue={venue}
              i={i}
              key={venue.id}
              data={props.data}
              slider="true"
            />
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

import React, { useState, useEffect } from "react";
import Card from "../card";
import * as s from "../../styles/venues";

/**
 * Function to create the venue container component and handle infinite scroll
 * @param {array} data Array of venue objects
 * @returns The venue container component with cards
 */
function App({ data }) {
  //State to store number of items to show
  const [itemsToShow, setItemsToShow] = useState(21);

  useEffect(() => {
    const handleScroll = () => {
      if (
        Math.floor(window.innerHeight + document.documentElement.scrollTop) <=
        document.documentElement.offsetHeight - 4
      ) {
        console.log(
          Math.floor(window.innerHeight + document.documentElement.scrollTop)
        );
        console.log(document.documentElement.offsetHeight);
        return;
      }
      setItemsToShow((prevNum) => prevNum + 21);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollTop() {
    window.scrollTo(0, 0);
  }

  return (
    <s.VenueContainer>
      {data.slice(0, itemsToShow).map((venue, i) => {
        return (
          <Card venue={venue} i={i} key={venue.id} data={data} slider="false" />
        );
      })}
      <s.ScrollTopContainer onClick={scrollTop}>
        <span className="material-symbols-outlined">arrow_upward</span>
      </s.ScrollTopContainer>
    </s.VenueContainer>
  );
}

export default App;

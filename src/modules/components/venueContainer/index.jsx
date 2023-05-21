import React, { useState, useEffect } from "react";
import Card from "../card";
import * as s from "../../styles/venues";
function App({ data }) {
  const [itemsToShow, setItemsToShow] = useState(20);

  useEffect(() => {
    const handleScroll = () => {
      if (
        Math.floor(window.innerHeight + document.documentElement.scrollTop) !==
        document.documentElement.offsetHeight
      ) {
        return;
      }
      setItemsToShow((prevNum) => prevNum + 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <s.VenueContainer>
      {data.slice(0, itemsToShow).map((venue, i) => {
        return (
          <Card venue={venue} i={i} key={venue.id} data={data} slider="false" />
        );
      })}
    </s.VenueContainer>
  );
}

export default App;

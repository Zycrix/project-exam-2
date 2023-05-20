import React from "react";
import * as c from "../../styles/common";
import * as s from "../../styles/home";
import Card from "../card";
import recentFilter from "../../utils/updatedFilter";
import { useNavigate } from "react-router-dom";
import scrollFix from "../../utils/scrollFix";

function App(props) {
  const navigate = useNavigate();
  const recent = recentFilter(props.data);

  function handleClick() {
    scrollFix();
    navigate("/venues");
  }

  return (
    <>
      <s.RecentContainer>
        <c.SecondaryHeading>Recently posted venues</c.SecondaryHeading>
        <s.CardContainer>
          {recent.map((venue, i) => {
            return (
              <Card
                venue={venue}
                i={i}
                key={venue.id}
                data={props.data}
                slider="false"
              />
            );
          })}
        </s.CardContainer>
        <c.ViewMoreButton onClick={handleClick}>
          View all listings
        </c.ViewMoreButton>
      </s.RecentContainer>
    </>
  );
}

export default App;

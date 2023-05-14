import React from "react";
import * as c from "../../modules/styles/common";
import * as s from "../../modules/styles/newVenue";
import NewVenue from "../../modules/components/newVenueForm";

function App(props) {
  const title = document.querySelector("title");
  title.innerText = "Holidaze | Create a venue";
  return (
    <div>
      <c.MainHeading>Create a venue</c.MainHeading>
      <NewVenue />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import * as c from "../../styles/common";
import * as s from "../../styles/venues";
function App() {
  const [filter, setFilter] = useState(false);
  return (
    <s.FilterContainer expanded={filter}>
      <c.CleanButton
        className="expand-button"
        onClick={() => setFilter(!filter)}
      >
        <p>Filter</p>
        <span className="material-symbols-outlined">expand_more</span>
      </c.CleanButton>
      <s.FilterDropdown show={filter}>
        <h1>asd</h1>
      </s.FilterDropdown>
    </s.FilterContainer>
  );
}

export default App;

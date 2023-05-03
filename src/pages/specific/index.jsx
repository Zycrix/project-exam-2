import React from "react";

function App() {
  const id = window.location.pathname.split("/")[2];

  return (
    <div>
      <h1>Specific venue</h1>
      <p>id: {id}</p>
    </div>
  );
}

export default App;

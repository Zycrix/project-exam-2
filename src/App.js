import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./modules/components/layout";
import Home from "./modules/components/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

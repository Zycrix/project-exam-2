import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./modules/components/layout";
import Home from "./pages//home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import AllVenues from "./pages/venues";
import SpecificVenue from "./pages/specific";
import NewVenue from "./pages/newVenue";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/profile/:name" element={<Profile />} />
        <Route path="venues" element={<AllVenues />} />
        <Route path="/specific/:id" element={<SpecificVenue />} />
        <Route path="new-venue" element={<NewVenue />} />
      </Route>
    </Routes>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./modules/components/layout";
import Home from "./pages//home";
import Login from "./pages/login";
import MyVenues from "./pages/myVenues";
import Profile from "./pages/profile";
import AllVenues from "./pages/venues";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="my-venues" element={<MyVenues />} />
        <Route path="profile" element={<Profile />} />
        <Route path="venues" element={<AllVenues />} />
      </Route>
    </Routes>
  );
}

export default App;

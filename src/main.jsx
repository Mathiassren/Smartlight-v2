import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
//pages
import Mainroom from "./pages/Mainroom.jsx";
import Rooms from "./components/Rooms.jsx";
import RoomDetails from "./pages/DetailView.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route index element={<Mainroom />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="rooms/:roomId" element={<RoomDetails />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

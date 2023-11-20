import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appointment from "./components/appointment";
import DoctorType from "./components/doctorType";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DoctorType />} />
        <Route path="/appoinment/:id" element={<Appointment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
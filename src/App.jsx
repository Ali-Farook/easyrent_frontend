import { useState } from "react";
import CustomerHome from "./screens/home/customer/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./screens/registration/Signup";
import PlaceAdd from "./screens/placeAdd/PlaceAdd";
import Explore from "./screens/exploreProperties/Explore";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./screens/registration/login";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<CustomerHome />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/placeAdd" element={<PlaceAdd />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

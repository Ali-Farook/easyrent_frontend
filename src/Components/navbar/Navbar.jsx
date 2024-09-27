import React from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Navbar() {
  const authToken = localStorage.getItem('@token');
  const navigate = useNavigate();

  const logout = () => {
    toast.error("Logout Successfully", {
      position: "top-right",
    });
    localStorage.removeItem('@token');
    localStorage.removeItem('@user');
    navigate('/');
  };


  return (
    <div class="navbar">
      <div class="navbar-logo">
        <a href="/">Easy Residence</a>
      </div>
      <div class="navbar-links">
        <a href="">
          <Link to="/">Home</Link>
        </a>
        <a href="">
          <Link to="/placeAdd">Place Add</Link>
        </a>
        {!authToken &&
          <a href="">
            <Link to="/register">Register</Link>
          </a>
        }
        {authToken &&
          <button className="logout" onClick={logout}>LogOut</button>
        }
      </div>
    </div>
  );
}

export default Navbar;

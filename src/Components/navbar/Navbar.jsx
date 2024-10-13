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
    <div className="navbar">
      <div className="navbar-logo">
        <a href="/">Easy Residence</a>
      </div>
      <div className="navbar-links">
        <a>
          <Link to="/">Home</Link>
        </a>
        <a>
          <Link to="/placeAdd">Place Add</Link>
        </a>
        {!authToken &&
          <a>
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

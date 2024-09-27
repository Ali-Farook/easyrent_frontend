import React, { useState } from "react";
import "./style.css";
import { signUp } from "../../services/ApiList";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Signup() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      };
      const response = await signUp(body);
      console.log('signUp====>', response.data);

      if (response.data.success) {
        console.log('Inner block');
        toast.success(response.data.message, {
          position: "top-right"
        });
        localStorage.setItem('@user', response.data.data);
        localStorage.setItem('@token', response.data.token);
        setTimeout(() => {
          navigate('/', { replace: true });
        }, 800);
      } else {
        toast.error(response.data.message, {
          position: "top-right",
        })
      }
    } catch (error) {
      return error;
    }
  };

  const checkToken = () => {
    const token = localStorage.getItem('@token');
    if (token) {
      navigate('/', { replace: true });
    }
  };

  useEffect(() => {
    checkToken();
  }, [])

  return (
    <div className="main-signup-container">
      <div className="signup-container">
        <h2>Create an Account</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label for="firstName">First Name</label>
            <input
              type="text"
              value={user.firstName}
              onChange={onChange}
              id="firstName"
              name="firstName"
              placeholder="Enter your email or phone number"
              required
            />
            <label for="lastName">Last Name</label>
            <input
              type="text"
              value={user.lastName}
              onChange={onChange}
              id="lastName"
              name="lastName"
              placeholder="Enter your email or phone number"
              required
            />
            <label for="email">Email</label>
            <input
              type="text"
              value={user.email}
              onChange={onChange}
              id="email"
              name="email"
              placeholder="Enter your email or phone number"
              required
            />
            <label for="password">Password</label>
            <input
              type="password"
              value={user.password}
              onChange={onChange}
              id="password"
              name="password"
              placeholder="Enter a new password"
              required
            />
            <div className="form-action">
              <button type="submit">Sign Up</button>
              <Link to={'/login'}>Already a user? Login here</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

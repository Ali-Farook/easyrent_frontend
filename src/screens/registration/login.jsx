import React, { useState } from "react";
import "./style.css";
import { login } from "../../services/ApiList";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Login() {
  const [user, setUser] = useState({
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
        email: user.email,
        password: user.password,
      };
      const response = await login(body);
      console.log('login====', response.data);

      if (response.data.success) {
        toast.success(response.data.message, {
          position: "top-right"
        });
        localStorage.setItem('@user', response.data.data.user);
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
    <div>
      <div className="main-signup-container">
        <div className="signup-container">
          <h2>Login</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group">

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
                <button type="submit">Login</button>
                <Link to={'/register'}>SignUp</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

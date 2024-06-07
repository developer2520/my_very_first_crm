import axios from "axios";
import React, { useState, useEffect } from "react";
import "./signin.css";
import { useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader"; // Correct import

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    const data = {
      username,
      password,
    };

    try {
      const response = await axios.post("/login", data);
      if (response.data.token) {
        sessionStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      } else {
        setError("Invalid credentials, please try again.");
      }

      console.log("Login successful");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("Admin not found");
      } else {
        setError("Error logging in: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signInCard">
      <h1>Sign in</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <h6>Enter your email</h6>
          <input
            type="text"
            placeholder="Email"
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <h6>Enter your password</h6>
          <input
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
        </div>
        <button
          type="button"
          className="signInButton"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? <HashLoader color="#ffffff" size={15} /> : "Sign In"}
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

import React, { useState } from "react";
import "../Css/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [campus, setCampus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:9999/users?userName=${username}&password=${password}`
      );
      const user = response.data[0];
      console.log(user.roleID + " " + user.name);
      if (user) {
        navigate(`/viewCourse`);
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };
  return (
    <div className="login-container">
      <div className="login-header">
        <img
          src="https://brademar.com/wp-content/uploads/2022/09/FPT-Logo-PNG.png"
          alt="FPT Education Logo"
          className="logo"
        />
        <h2>The social constructive learning tool</h2>
      </div>
      <div class="login-option">
        <button class="google-button">
          <img
            src="https://th.bing.com/th/id/R.7e557f1c0864829c54c300d15bee69f4?rik=fjZN1AYH30vXIw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fgoogle%2fgoogle_PNG19635.png&ehk=ZmsumEtoeJQhKoUzQTZO2TEbYPBu0%2b7EFdjmJ3qljls%3d&risl=&pid=ImgRaw&r=0"
            alt="Google Logo"
          />{" "}
          Sign in with Google
        </button>
        <button class="fpt-button">
          <img
            src="https://brademar.com/wp-content/uploads/2022/09/FPT-Logo-PNG.png"
            alt="Google Logo"
          />{" "}
          Sign in FEID
        </button>
      </div>
      <p className="vpn-warning">
        Select a campus before sigin in to the system with type username
      </p>
      <form onSubmit={handleSubmit}>
        <div className="select-container">
          <select
            id="campus"
            value={campus}
            onChange={(e) => setCampus(e.target.value)}
          >
            <option value="">Select campus</option>
            <option value="savalo">ĐÀ NẴNG</option>
            <option value="hola">HÒA LẠC</option>
            <option value="hcm">HỒ CHÍ MINH</option>
          </select>
        </div>
        <div className="input-container">
          <input
            placeholder="Username"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span className="icon">&#x2661;</span>
        </div>
        <div className="input-container">
          <input
            placeholder="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <span className="icon">&#x1F512;</span>
        </div>
        <button type="submit" className="login-button">
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default Login;

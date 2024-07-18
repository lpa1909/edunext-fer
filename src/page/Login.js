import React, { useContext, useEffect, useState } from "react";
import "../Css/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [campus, setCampus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      alert("Vui lòng nhập đầy đủ thông tin và mật khẩu.");
      return;
    }
    try {
      console.log('Sending request to API');
      const response = await axios.get(
        `http://localhost:9999/users?userName=${username}&password=${password}&campus=${campus}`
      );
      const user = response.data[0];
      console.log(user)
      if (user) {
        const classResponse = await axios.get(`http://localhost:9999/classes?classID=${user.classID}`);
        const classData = classResponse.data[0];
        if (classData) {

          if(user.roleID == 1){
            navigate(`/viewCourse/${user.id}`);
          } else if(user.roleID == 2){
            navigate(`/admin-dashboard`);
          } else{
            navigate(`/viewCourseTeacher/${user.id}`);
          }
        }
      } else {
        alert("Tài khoản của bạn không đăng nhập được.");
      }
    } catch (error) {
      console.error("Login failed", error);
    }

  };


  const loginGoogle = async (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse?.credential);


    const response = await axios.get(
      `http://localhost:9999/users?email=${decoded.email}`
    );
    const user = response.data[0];
    console.log(user);
    if (user) {
      const classResponse = await axios.get(`http://localhost:9999/classes?classID=${user.classID}`);
      const classData = classResponse.data[0];
      if (classData) {

        if(user.roleID == 1){
          navigate(`/viewCourse/${user.id}`);
        } else if(user.roleID == 2){
          navigate(`/admin/${user.id}`);
        } else{
          navigate(`/viewCourseTeacher/${user.id}`);
        }
      }
    } else {
      alert("Tài khoản của bạn không được phép đăng nhập vào hệ thống.");
    }

  }



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
        <GoogleLogin
          onSuccess={credentialResponse => {
            loginGoogle(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
          useOneTap
        />
        <button class="fpt-button">
          <img
            src="https://brademar.com/wp-content/uploads/2022/09/FPT-Logo-PNG.png"
            alt="Google Logo"
          />{" "}
          Sign in FEID
        </button>
      </div>
      <br />
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

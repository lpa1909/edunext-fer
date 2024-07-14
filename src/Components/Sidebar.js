import React, { useEffect, useState } from 'react';
import '../Css/Sidebar.css';
import { FaHome, FaClipboardList, FaBell, FaFilePdf, FaHeadphones, FaQuestionCircle, FaBars, FaUserCircle } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const Sidebar = (userID) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const handleToggle = () => {
    setShowDropdown(!showDropdown);
  }

  const navigate = useNavigate();
  

  useEffect(() => {
    const fetchCourse = async () => {
      
      try {
        const response = await axios.get(
          `http://localhost:9999/users?id=${id}`
        );
        const userData = response.data[0];
        setUser(userData);
      } catch (error) {
        console.error('Error fetch: ', error);
      }
    };

    fetchCourse();
  }, [id]);


  const handleLogOut = () => {
    navigate(`/`);
  }

  const handleHome = () => {
    navigate(`/viewCourse/${id}`);
  }

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img src="https://brademar.com/wp-content/uploads/2022/09/FPT-Logo-PNG.png" alt="FPT Education Logo" className="sidebar-logo" />

       
        <FaUserCircle className="sidebar-icon profile-icon" onClick={handleToggle}/>
       
        
      {showDropdown && (
        <ul className='infor'>
          <li className='infor-email'>{user.email}</li>
          <div className='border'></div>
          <li className='infor-logout' onClick={handleLogOut}>Logout</li>
        </ul>
      )
      }  
     
      </div>
      <div className="sidebar-menu">
        <FaBars className="sidebar-icon" />
        <FaHome className="sidebar-icon" onClick={handleHome} />
        <FaClipboardList className="sidebar-icon" />
        <FaBell className="sidebar-icon" />
        <FaFilePdf className="sidebar-icon" />
        <FaHeadphones className="sidebar-icon" />
        <FaQuestionCircle className="sidebar-icon" />
      </div>
    </div>
  );
};

export default Sidebar;

import React, { useState } from 'react';
import '../Css/Sidebar.css';
import { FaHome, FaClipboardList, FaBell, FaFilePdf, FaHeadphones, FaQuestionCircle, FaBars, FaUserCircle } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';


const Sidebar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleToggle = () => {
    setShowDropdown(!showDropdown)
  };

  const handleLogOut = () => {

  }

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img src="https://brademar.com/wp-content/uploads/2022/09/FPT-Logo-PNG.png" alt="FPT Education Logo" className="sidebar-logo" />
        <FaUserCircle className="sidebar-icon profile-icon" onClick={handleToggle} />
        
        <Dropdown show={showDropdown}>
          <Dropdown.Menu>
            <Dropdown.Item onClick={handleToggle}>anlphe176714@fpt.edu.vn</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogOut}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="sidebar-menu">
        <FaBars className="sidebar-icon" />
        <FaHome className="sidebar-icon" />
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

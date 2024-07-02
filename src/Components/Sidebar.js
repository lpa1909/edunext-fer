import React from 'react';
import '../Css/Sidebar.css';
import { FaHome, FaClipboardList, FaBell, FaFilePdf, FaHeadphones, FaQuestionCircle, FaBars, FaUserCircle } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img src="https://brademar.com/wp-content/uploads/2022/09/FPT-Logo-PNG.png" alt="FPT Education Logo" className="sidebar-logo" />
        <FaUserCircle className="sidebar-icon profile-icon" />
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

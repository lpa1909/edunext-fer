import React, { useEffect, useState } from 'react';
import '../Css/Sidebar.css';
import { FaHome, FaClipboardList, FaBell, FaFilePdf, FaHeadphones, FaQuestionCircle, FaBars, FaUserCircle, FaBlog } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const SidebarTeacher = (userID) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState([]);
  const { id } = useParams();
  // const [check, setCheck] = useState(false);
  // const [check1, setCheck1] = useState(false);
  const handleToggle = () => {
    setShowDropdown(!showDropdown);
  }

  const navigate = useNavigate();

  // useEffect(()=>{
  //   const users = document.querySelector('.user');
  //   if (users) {
  //     let logout = document.querySelector('.logout');
  //     users.addEventListener('click', function () {
  //       if (!check1) {
  //         logout.classList.add('show');
  //         setCheck1(!check1)
  //       } else {
  //         logout.classList.remove('show');
  //         setCheck1(!check1)
  //       }
  //     })
  //   }
  // })
  

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
    navigate(`/viewCourseTeacher/${id}`);
  }

  

  return (
    <div className="sidebar" style={{width: "80px", padding:'0px'}}>
      <div className="sidebar-top" style={{ padding:'0px'}}>
        <img   width={80}  src="https://edunext.fpt.edu.vn/assets/logo-home-Djb_K2V0.png" alt="FPT Education Logo"  />
        <div className='user' style={{backgroundColor:"#ccc",padding:"0 27px"}} ><FaUserCircle  className="sidebar-icon profile-icon" onClick={handleToggle}/>
      
       </div>
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
      {/* <div className='logout' style={{ width: "280px", border: "1px solid #ccc", padding: "15px", margin: "auto", borderRadius: "5px", boxShadow: " 2px 2px 2px #888888", position: "fixed", top: "85px", left: "10px", backgroundColor: "#fff",display:'none'}}>
        <div ><Link style={{ color: "#333", textDecoration: "none" }}><FaUserCircle  className="sidebar-icon profile-icon"/><b style={{paddingLeft:'8px'}} >{user.email}</b></Link></div>
        <div><Link to={'/'} style={{ color: "#333", textDecoration: "none", display: "inline-flex" }}><i class="bi bi-box-arrow-right"></i><p style={{ paddingLeft: "10px", fontSize: "20px" }}>Logout</p></Link></div>
      </div> */}
    </div>
  );
};

export default SidebarTeacher;

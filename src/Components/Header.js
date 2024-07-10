import React from 'react';
import '../Css/Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleToggleCourse = () => {
     
  }

  const handleToggleProject = () => {
     navigate(`/viewProject`);
  }  

  return (
    <div className="header">
      <div className="header-top">
        <div className="tabs">
          <button className="tab active">COURSE</button>
          <button className="tab" onClick={handleToggleProject}>PROJECT</button>
        </div>
        <div className="semester-dropdown">
          <label htmlFor="semester">SEMESTER</label>
          <select id="semester" name="semester">
            <option value="SPRING2024">SPRING2024</option>
            <option value="SUMMER2024">SUMMER2024</option>
            <option value="FALL2024">FALL2024</option>
            {/* <option value="WINTER2024">WINTER2024</option> */}
          </select>
        </div>
      </div>
      <p className="recently-updated">
        Recently Updated (Để xem chi tiết về các thay đổi cập nhật gần đây, vui lòng nhấp vào đây)
      </p>
    </div>
  );
};

export default Header;

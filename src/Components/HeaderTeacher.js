import React, { useEffect, useState } from 'react';
import '../Css/Header.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const HeaderTeacher = ({semester,change}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [checkButton, setButton] = useState('active')
  
  const { id } = useParams();

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

  const handleToggleCourse = () => {
    navigate(`/viewCourseTeacher/${id}`);
  }
 

  const handleToggleProject = () => {
     navigate(`/viewProjectTeacher/${id}`);

  }  

 

  return (
    <div className="header">
      <div className="header-top">
        <div className="tabs">
          <button className={checkButton==='active'?"tab active": "tab"} onClick={()=>(handleToggleCourse(), setButton('active'))}>COURSE</button>
          <button className={checkButton==='prj'?"active tab ": "tab"} onClick={()=>(setButton('prj'),handleToggleProject())}>PROJECT</button>
        </div>
        <div className="semester-dropdown">
          <label htmlFor="semester">SEMESTER</label>
          <select id="semester" name="semester" value={semester} onChange={(e)=>change(e.target.value)}>
          <option value="">All</option>
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

export default HeaderTeacher;

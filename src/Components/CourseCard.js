import React, { useContext } from 'react';
import { CourseContext } from '../Context/CourseContext';
import '../Css/CourseCard.css';

import { FaBook, FaUserGraduate, FaChalkboardTeacher, FaUsers, FaBookReader } from 'react-icons/fa';
import Header from './Header';
import Sidebar from './Sidebar';


const CourseCard = () => {
  const { courses , classes  } = useContext(CourseContext);

  const getClassName = (classID) => {
    const foundClass = classes.find(c => c.classID === classID);
    return foundClass ? foundClass.className : 'Lớp không xác định'; 
  };

  return (
    <div>
    <div className="app">
      </div>
      <div className='course-container'>
      {courses.map(course => (
        <div key={course.courseCode} className="course-card">
        <h2><FaBook className="course-icon" /> {course.courseName}</h2>
        <p style={{color: 'gray'}}><FaUsers className="course-icon" /> Class: {getClassName(course.classID)}</p>
        <p style={{color: 'gray'}}><FaBookReader className="course-icon" /> Course Type: {course.courseType}</p>
        <p style={{color: 'gray'}}>
          <FaUserGraduate className="course-icon" /> Number of Students: {course.numOfStudents}
        </p>
        <p style={{color: 'gray'}}>
          <FaChalkboardTeacher className="course-icon" /> Semester: {course.semester}
        </p>
      </div>
      ))}
    </div>
    </div>
    
  );
};

export default CourseCard;

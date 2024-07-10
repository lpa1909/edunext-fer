import React, { useContext } from 'react';
import { CourseContext } from '../Context/CourseContext';
import '../Css/CourseCard.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { FaBook, FaUserGraduate, FaChalkboardTeacher, FaUsers, FaBookReader } from 'react-icons/fa';


const CourseCard = () => {
  const { courseData, classes } = useContext(CourseContext);
  const courseArray = Object.values(courseData)

  console.log(courseArray.length)
  const getClassName = (classID) => {
    const foundClass = classes.find(c => c.classID === classID);
    return foundClass ? foundClass.className : 'Lớp không xác định';
  };

  return (
    <div>
      <div className="app">
      </div>

      {courseData.length > 0 ? (
        <div className='course-container'>
        {courseArray.map(course => (
          <div key={course.courseCode} className="course-card">
            <h2><FaBook className="course-icon" /> {course.courseName}</h2>
            <p style={{ color: 'gray' }}><FaUsers className="course-icon" /> Class: {getClassName(course.classID)}</p>
            <p style={{ color: 'gray' }}><FaBookReader className="course-icon" /> Course Type: {course.courseType}</p>
            <p style={{ color: 'gray' }}>
              <FaUserGraduate className="course-icon" /> Number of Students: {course.numOfStudents}
            </p>
            <p style={{ color: 'gray' }}>
              <FaChalkboardTeacher className="course-icon" /> Semester: {course.semester}
            </p>
          </div>
        ))}
      </div>
      ) : (
        <h3 style={{ marginTop: '-30px' }}>Bạn chưa có môn học nào trong kì này!</h3>
      )}
      
    </div>

  );
};

export default CourseCard;

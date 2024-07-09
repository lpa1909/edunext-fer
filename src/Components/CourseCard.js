import React, { useContext } from 'react';
import { CourseContext } from '../Context/CourseContext';
import '../Css/CourseCard.css';
import { FaBook, FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';
import Header from './Header';
import Sidebar from './Sidebar';

const CourseCard = () => {
  const { courses } = useContext(CourseContext);

  return (
    <div>
    <div className="app">
        <Header />
        <div className="main-content">
          <Sidebar />
        </div>
      </div>
      <div className='course-container'>
      {courses.map(course => (
        <div key={course.courseCode} className="course-card">
        <FaBook className="course-icon" /> {/* Font Awesome book icon */}
        <h2>{course.courseName}</h2>
        <p><strong>Course Code:</strong> {course.courseCode}</p>
        <p><strong>Class:</strong> {course.classID}</p>
        <p><strong>Course Type:</strong> {course.courseType}</p>
        <p>
          <FaUserGraduate className="course-icon" /> {/* Font Awesome user icon */}
          <strong>Number of Students:</strong> {course.numOfStudents}
        </p>
        <p>
          <FaChalkboardTeacher className="course-icon" /> {/* Font Awesome teacher icon */}
          <strong>Semester:</strong> {course.semester}
        </p>
      </div>
      ))}
    </div>
    </div>
    
  );
};

export default CourseCard;

import { CourseContext } from '../../Context/CourseContext';
import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../Css/HeaderCourse.css';

const HeaderCourseTeacher = () => {
  const context = useContext(CourseContext);
  const { id } = useParams();
  const { uid } = useParams();

  if (!context) {
    return <h2>Context not available</h2>;
  }

  const { courses } = context;
  const course = courses.find(c => c.courseID === parseInt(uid));
  

  if (!course) {
    return <h2>Course not found</h2>;
  }
  return (
    <div className="header-course">
      <Link to={`/viewCourseTeacher/${id}`}>Home</Link>
      <span> / {course.courseCode} - {course.courseName}</span>
    </div>
  );
};

export default HeaderCourseTeacher;

import { CourseContext } from '../../Context/CourseContext';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import '../../Css/HeaderCourse.css';

const HeaderCourse = () => {
  const context = useContext(CourseContext);
  const { id } = useParams();

  if (!context) {
    return <h2>Context not available</h2>;
  }

  const { courses } = context;
  const course = courses.find(c => c.courseID === parseInt(id));
  

  if (!course) {
    return <h2>Course not found</h2>;
  }
  return (
    <div className="header-course">
      <a href="/viewCourse">Home</a> 
      <span> / {course.courseCode} - {course.courseName}</span>
    </div>
  );
};

export default HeaderCourse;

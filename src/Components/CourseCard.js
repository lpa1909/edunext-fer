import React, { useContext } from 'react';
import { CourseContext } from '../Context/CourseContext';
import '../Css/CourseCard.css';

const CourseCard = () => {
  const { courses } = useContext(CourseContext);

  return (
    <div className='course-container'>
      {courses.map(course => (
        <div key={course.courseID} className="course-card">
          <h2>{course.courseName}</h2>
          <p><strong>Course Code:</strong> {course.courseCode}</p>
          <p><strong>Class:</strong> {course.classID}</p>
          <p><strong>Course Type:</strong> {course.courseType}</p>
          <p><strong>Number of Students:</strong> {course.numOfStudents}</p>
          <p><strong>Semester:</strong> {course.semester}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;

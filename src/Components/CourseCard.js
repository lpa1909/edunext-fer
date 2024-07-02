import React from 'react';
import { FaUserGraduate, FaMapMarkerAlt, FaUserFriends } from 'react-icons/fa';
import '../Css/CourseCard.css';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <div className="course-info">
        <div className="course-detail">
          <FaUserGraduate className="icon" />
          <span className="instructor">{course.instructor}</span>
        </div>
        <div className="course-detail">
          <FaMapMarkerAlt className="icon" />
          <span className="location">{course.location}</span>
        </div>
        <div className="course-detail">
          <FaUserFriends className="icon" />
          <span className="students">{course.students} students</span>
        </div>
      </div>
      <a href="#" className="course-link">Go to course &rarr;</a>
    </div>
  );
};

export default CourseCard;

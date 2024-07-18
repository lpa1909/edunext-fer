import { CourseContext } from '../../Context/CourseContext';
import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../Css/HeaderCourse.css';

const HeaderSlotTeacher = () => {
  const context = useContext(CourseContext);
  const { id } = useParams();
  const { uid } = useParams();
  const { cid } = useParams();

  if (!context) {
    return <h2>Context not available</h2>;
  }

  const { courses,slots } = context;
  const slot = slots.find(c => c.slotID === parseInt(uid));
  

  if (!slot) {
    return <h2>Course not found</h2>;
  }
  return (
    <div className="header-course">
      <Link to={`/viewCourseTeacher/${id}`}>Home</Link>
      <span> / <Link to={`/courseTeacher/${cid}/${id}`}>{slot.slotName}</Link> / {slot.title[0]}</span>
    </div>
  );
};

export default HeaderSlotTeacher;

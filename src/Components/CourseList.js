import React from 'react';
import CourseCard from './CourseCard';
import '../Css/CourseList.css';

const courses = [
  {
    id: '45124',
    code: 'SWT301',
    title: 'Software Testing',
    instructor: 'SE1835-NJ',
    location: 'edu_next_ltr_fpt_edu_02',
    students: 30
  },
  {
    id: '40568',
    code: 'SWR302',
    title: 'Software Requirement',
    instructor: 'SE1835-NJ',
    location: 'edu_next_ltr_fpt_edu_02',
    students: 30
  },
  {
    id: '12464',
    code: 'FER202',
    title: 'Front-End Web Development',
    instructor: 'SE1835-NJ',
    location: 'edu_next_ltr_fpt_edu_02',
    students: 30
  },
  {
    id: '12984',
    code: 'SWP391',
    title: 'Software Development',
    instructor: 'SE1835-NJ',
    location: 'edu_next_ltr_fpt_edu_02',
    students: 31
  }
];

const CourseList = () => {
  return (
    <div className="course-list">
      <div className="course-container">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;

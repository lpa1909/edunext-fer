import React from 'react';
import Sidebar from '../Components/Sidebar';
import '../App.css';
import Header from '../Components/Header';
import CourseCard from '../Components/CourseCard';
import CourseProvider from '../Context/CourseContext';

function ViewCourse() {
  return (
      <div className="app">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content">
                <CourseProvider>
                  <CourseCard />
                </CourseProvider>
          </div>
        </div>
      </div>

  );
}

export default ViewCourse;

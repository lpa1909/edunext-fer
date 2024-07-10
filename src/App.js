import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Answer from './Components/Answer';
import Login from './page/Login';
import ViewCourse from './page/ViewCourse';
import CourseProvider from './Context/CourseContext';
import Course from './Components/Course/Course';


function App() {
  return (
    
    <CourseProvider>
    <Router>
      <div>
            <Routes>
              <Route path="/viewCourse/:id" element={<ViewCourse/>} />
              <Route path='/answer' element={<Answer/>}/>
              <Route path="/" element={<Login/>} />
              <Route path="/course/:id" element={<Course/>}/>
            </Routes>
      </div>

    </Router>
    </CourseProvider>
  );
}

export default App;

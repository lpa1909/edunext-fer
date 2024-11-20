import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Answer from './Components/Answer';
import Login from './page/Login';
import ViewCourse from './page/ViewCourse';
import ViewProject from './page/ViewProject';
import CourseProvider from './Context/CourseContext';
import Course from './Components/Course/Course';
import ViewCourseTeacher from './page/ViewCourseTeacher';
import ViewProjectTeacher from './page/ViewProjectTeacher';
import CourseTeacher from './Components/Course/CourseTeacher';
import ViewSlotsTeacher from './Components/Course/ViewSlotsTeacher';
import UserCrud from './page/UserCrud';
import CourseCrud from './page/CourseCrud';
import AdminDashboard from './page/AdminDashboard'; 



function App() {
  return (
    
    <CourseProvider>
    <Router>
      <div>
            <Routes>
              <Route path="/viewCourse/:id" element={<ViewCourse/>} />
<<<<<<< Updated upstream
              <Route path='/answer/:questionID/:userID' element={<Answer/>}/>
              <Route path='/viewProject' element={<ViewProject/>}/>
              <Route path="/" element={<Login/>} />
              <Route path="/course/:id/:userID" element={<Course/>}/>
              
=======
              <Route path='/answer' element={<Answer/>}/>
              <Route path='/viewProject/:id' element={<ViewProject/>}/>
              <Route path="/" element={<Login/>} />
              <Route path="/course/:id" element={<Course/>}/>
              <Route path="/viewCourseTeacher/:id" element={<ViewCourseTeacher/>}/>
              <Route path='/viewProjectTeacher/:id' element={<ViewProjectTeacher/>}/>
              <Route path="/courseTeacher/:uid/:id" element={<CourseTeacher/>}/>
              <Route path="/viewSlot/:id/:uid/:cid" element={<ViewSlotsTeacher/>}/>
              <Route path="/manage-users" element={<UserCrud />} />
            <Route path="/manage-courses" element={<CourseCrud />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} /> 
>>>>>>> Stashed changes
            </Routes>
      </div>

    </Router>
    </CourseProvider>
  );
}

export default App;

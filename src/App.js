import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CourseCard from './Components/CourseCard';
import CourseProvider from './Context/CourseContext';
import Answer from './Components/Answer';
import Star from './Components/Star';

function App() {
  return (
    <CourseProvider>
    <Router>
          <div className="content">
            <Routes>
              <Route path="/" element={<CourseCard />}/>
              <Route path='/answer' element={<Answer/>}/>
            </Routes>
          </div>
    </Router>
    </CourseProvider>
  );
}

export default App;

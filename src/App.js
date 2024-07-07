import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import './App.css';
import Header from './Components/Header';
import CourseCard from './Components/CourseCard';
import CourseProvider from './Context/CourseContext';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={
                <CourseProvider>
                  <CourseCard />
                </CourseProvider>} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

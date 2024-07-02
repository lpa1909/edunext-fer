import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import CourseList from './Components/CourseList';
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<CourseList />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

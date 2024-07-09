import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import ViewCourse from './page/ViewCourse';

function App() {
  return (
    <Router>
      <div>
            <Routes>
              <Route path="/viewCourse" element={<ViewCourse/>} />

              <Route path="/" element={<Login/>} />
            </Routes>

      </div>
    </Router>
  );
}

export default App;

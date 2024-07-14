import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';


const ViewProject = () => {
  
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar/>
        <div className="content">
            <img src='https://edunext.fpt.edu.vn/assets/box-no-data-KZXFWQlG.png' alt='project'/>
        </div>
      </div>
    </div>
  );
}

export default ViewProject;

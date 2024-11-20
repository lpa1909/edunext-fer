import React, { useEffect, useState } from 'react';
import HeaderTeacher from '../Components/HeaderTeacher';
import SidebarTeacher from '../Components/SidebarTeacher';


const ViewProjectTeacher = () => {
  
  return (
    <div className="app">
      <HeaderTeacher />
      <div className="main-content">
        <SidebarTeacher/>
        <div className="content">
            <img src='https://edunext.fpt.edu.vn/assets/box-no-data-KZXFWQlG.png' alt='project'/>
        </div>
      </div>
    </div>
  );
}

export default ViewProjectTeacher;

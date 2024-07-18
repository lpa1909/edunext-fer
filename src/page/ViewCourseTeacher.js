import React, { useEffect, useState } from 'react';
import '../App.css';
import CourseProvider from '../Context/CourseContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HeaderTeacher from '../Components/HeaderTeacher';
import SidebarTeacher from '../Components/SidebarTeacher';
import CourseCardTeacher from '../Components/CourseCardTeacher';

const ViewCourseTeacher = () => {
  const { id } = useParams();
  const [course, setCourse] = useState([]);
  const [user, setUser] = useState([]);
  const [semester,setSemester] = useState('')
  console.log('id: ', id)
  useEffect(() => {
    const fetchCourse = async () => {
      const response = await axios.get(
        `http://localhost:9999/users?id=${id}`
      );
      const userData = response.data[0];
      setUser(userData);
      try {
        const courseResponse = await axios.get(
          `http://localhost:9999/courses?TeacherName=${userData.email}`
        );
        const coursesData = courseResponse.data;
        setCourse(coursesData);
      } catch (error) {
        console.error('Error fetch: ', error);
      }
    };

    

    fetchCourse();
  }, [id]);

 
  console.log(user)
  console.log(course)
  const changeTodo = (id) => {
    setSemester(id);
  };
  const filterCourse = course.filter(t => {
    return (
      (!semester || t.semester === semester)
    );
  });

  return (
    <div className="app">
      <HeaderTeacher semester={semester} change={changeTodo} />
      <div className="main-content">
        <SidebarTeacher userID={id}/>
        <div className="content">

          {course !== null ? (
            <CourseProvider courseData={filterCourse}>
              <CourseCardTeacher idc={id}/>  
            </CourseProvider>
          ) : (
            <p>Bạn chưa có lớp dạy cho kì này</p>
          )}


        </div>
      </div>
    </div>

  );
}

export default ViewCourseTeacher;

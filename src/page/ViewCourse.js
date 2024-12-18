import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import '../App.css';
import Header from '../Components/Header';
import CourseCard from '../Components/CourseCard';
import CourseProvider from '../Context/CourseContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewCourse = () => {
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
          `http://localhost:9999/courses?classID=${userData.classID}`
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
      <Header semester={semester} change={changeTodo} />
      <div className="main-content">
        <Sidebar userID={id}/>
        <div className="content">

          {course !== null ? (
<<<<<<< Updated upstream
            <CourseProvider courseData={course}>
              <CourseCard userID={id}/>  
=======
            <CourseProvider courseData={filterCourse}>
              <CourseCard idC={id}/>  
>>>>>>> Stashed changes
            </CourseProvider>
          ) : (
            <p>Bạn chưa có lớp học cho kì này</p>
          )}


        </div>
      </div>
    </div>

  );
}

export default ViewCourse;

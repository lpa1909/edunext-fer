import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CourseContext = createContext();

const CourseProvider = ({ children }) => {
    const [courses, setCourses] = useState([]);
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Fetch courses and classes concurrently
            const [coursesResponse, classesResponse] = await Promise.all([
              axios.get('http://localhost:9999/courses'),
              axios.get('http://localhost:9999/classes')
            ]);
    
            setCourses(coursesResponse.data);
            setClasses(classesResponse.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <CourseContext.Provider value={{ courses , classes }}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;

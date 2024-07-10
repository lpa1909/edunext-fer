import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CourseContext = createContext();

const CourseProvider = ({ children , courseData  }) => {

  const [courses, setCourses] = useState([]);
  const [inputAnswer, setInputAnswer] = useState('');
  const [answers, setAnswers] = useState([]);
  const [users, setUsers] = useState([]);
  const [classes, setClasses] = useState([]);
  
 console.log(courseData)

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:9999/courses');
        setCourses(response.data);
        const fetchAnswer = await axios.get('http://localhost:9999/answers');
        setAnswers(fetchAnswer.data);
        const fetchUser = await axios.get('http://localhost:9999/users');
        setUsers(fetchUser.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
    
    
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
  
  


const addAnswer = async (questionId, userId, answer) => {
  const response = await axios.post('http://localhost:9999/answers', {
    ...answer,
    answerID: answers.length + 1,
    questionID: questionId,
    userID: userId
  });
  setAnswers([...answers, response.data]);
}


  return (

    <CourseContext.Provider value={{courseData , courses, classes, inputAnswer, setInputAnswer,answers, setAnswers, users, setUsers, addAnswer }}>

      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;

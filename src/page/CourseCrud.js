import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table, Button, Form, Modal } from 'react-bootstrap';

const CourseCrud = () => {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);
  const [newCourse, setNewCourse] = useState({ courseName: '', courseCode: '', classID: '' });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:9999/courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleDelete = async (courseID) => {
    try {
      await axios.delete(`http://localhost:9999/courses/${courseID}`);
      fetchCourses();
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
    setShowModal(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      if (editingCourse) {
        await axios.put(`http://localhost:9999/courses/${editingCourse.courseID}`, editingCourse);
      } else {
        await axios.post('http://localhost:9999/courses', newCourse);
      }
      fetchCourses();
      handleClose();
    } catch (error) {
      console.error('Error saving course:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editingCourse) {
      setEditingCourse({ ...editingCourse, [name]: value });
    } else {
      setNewCourse({ ...newCourse, [name]: value });
    }
  };

  const handleClose = () => {
    setEditingCourse(null);
    setNewCourse({ courseName: '', courseCode: '', classID: '' });
    setShowModal(false);
  };

  return (
    <Container>
      <h1 className="my-4">Manage Courses</h1>
      <Button variant="primary" onClick={() => setShowModal(true)}>Add New Course</Button>
      <Table striped bordered hover className="my-4">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Course Code</th>
            <th>Class ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.courseID}>
              <td>{course.courseName}</td>
              <td>{course.courseCode}</td>
              <td>{course.classID}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(course)}>Edit</Button>
                {' '}
                <Button variant="danger" onClick={() => handleDelete(course.courseID)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose}>
        <Form onSubmit={handleSave}>
          <Modal.Header closeButton>
            <Modal.Title>{editingCourse ? 'Edit Course' : 'Add New Course'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="formCourseName">
              <Form.Label>Course Name</Form.Label>
              <Form.Control
                type="text"
                name="courseName"
                placeholder="Enter course name"
                value={editingCourse ? editingCourse.courseName : newCourse.courseName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formCourseCode">
              <Form.Label>Course Code</Form.Label>
              <Form.Control
                type="text"
                name="courseCode"
                placeholder="Enter course code"
                value={editingCourse ? editingCourse.courseCode : newCourse.courseCode}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formClassID">
              <Form.Label>Class ID</Form.Label>
              <Form.Control
                type="text"
                name="classID"
                placeholder="Enter class ID"
                value={editingCourse ? editingCourse.classID : newCourse.classID}
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button type="submit" variant="primary">{editingCourse ? 'Save Changes' : 'Add Course'}</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default CourseCrud;

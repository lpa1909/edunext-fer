import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table, Button, Form, Modal } from 'react-bootstrap';

const UserCrud = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({ name: '', email: '', campus: '', userName: '', password: '', roleID: 1 });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:9999/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:9999/users/${userId}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setShowModal(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      if (editingUser) {
        await axios.put(`http://localhost:9999/users/${editingUser.id}`, editingUser);
        console.log('User updated:', editingUser);
      } else {
        await axios.post('http://localhost:9999/users', newUser);
        console.log('New user added:', newUser);
      }
      fetchUsers();
      handleClose();
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editingUser) {
      setEditingUser({ ...editingUser, [name]: value });
    } else {
      setNewUser({ ...newUser, [name]: value });
    }
  };

  const handleClose = () => {
    setEditingUser(null);
    setNewUser({ name: '', email: '', campus: '', userName: '', password: '', roleID: 1 });
    setShowModal(false);
  };

  return (
    <Container>
      <h1 className="my-4">Manage Users</h1>
      <Button variant="primary" onClick={() => setShowModal(true)}>Add New User</Button>
      <Table striped bordered hover className="my-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Campus</th>
            <th>Username</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.campus}</td>
              <td>{user.userName}</td>
              <td>{user.roleID === 1 ? 'Student' : 'Admin'}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(user)}>Edit</Button>
                {' '}
                <Button variant="danger" onClick={() => handleDelete(user.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose}>
        <Form onSubmit={handleSave}>
          <Modal.Header closeButton>
            <Modal.Title>{editingUser ? 'Edit User' : 'Add New User'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter name"
                value={editingUser ? editingUser.name : newUser.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={editingUser ? editingUser.email : newUser.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formCampus">
              <Form.Label>Campus</Form.Label>
              <Form.Control
                type="text"
                name="campus"
                placeholder="Enter campus"
                value={editingUser ? editingUser.campus : newUser.campus}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="userName"
                placeholder="Enter username"
                value={editingUser ? editingUser.userName : newUser.userName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                value={editingUser ? editingUser.password : newUser.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formRole">
              <Form.Label>Role</Form.Label>
              <Form.Control
                as="select"
                name="roleID"
                value={editingUser ? editingUser.roleID : newUser.roleID}
                onChange={handleChange}
              >
                <option value={1}>Student</option>
                <option value={2}>Admin</option>
              </Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button type="submit" variant="primary">{editingUser ? 'Save Changes' : 'Add User'}</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default UserCrud;

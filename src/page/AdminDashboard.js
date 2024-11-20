import React from 'react';
import UserCrud from './UserCrud';
import CourseCrud from './CourseCrud';
import { Container, Row, Col } from 'react-bootstrap';

const AdminDashboard = () => {
  return (
    <Container>
      <h1>Admin Dashboard</h1>
      <Row>
        <Col>
          <UserCrud />
        </Col>
      </Row>
      <Row>
        <Col>
          <CourseCrud />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../Components/Header'
import MainContent from '../Components/MainContent'
import '../Css/StyleSlotPage.css';

function ViewSlotPage() {
  return (
    <Container fluid>
      <Row>
        <Col md={10}>
          <Header />
          <MainContent />
        </Col>
      </Row>
    </Container>
  )
}

export default ViewSlotPage
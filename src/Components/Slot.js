import React from 'react';
import { Card } from 'react-bootstrap';

const Slot = ({ slot }) => {
  return (
    <Card className="slot">
      <Card.Header>
        <Card.Title>Slot {slot.number}</Card.Title>
        <Card.Subtitle>{slot.date}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <ul>
          {slot.topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}

export default Slot;

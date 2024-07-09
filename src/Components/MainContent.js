import React from 'react';
import Slot from './Slot';

const slotsData = [
  {
    number: 1,
    date: '07:30 08/05/2024 - 09:50 08/05/2024',
    topics: [
      'Course Introduction',
      'Topic 1. Fundamentals of testing',
      '1.1 Why is testing necessary?',
      '1.2 What is testing?',
      '1.3 Testing principles',
      '1.4 Fundamental test process'
    ]
  },
  {
    number: 2,
    date: '10:00 10/05/2024 - 12:20 10/05/2024',
    topics: [
      '1.5 The psychology of testing',
      '1.5 The psychology of testing (cont.)',
      '1.6 Codes of ethics'
    ]
  }
];

const MainContent = () => {
  return (
    <div className="main-content">
      {slotsData.map((slot, index) => (
        <Slot key={index} slot={slot} />
      ))}
    </div>
  );
}

export default MainContent;

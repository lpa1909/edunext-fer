import React from 'react';
import { Breadcrumb, Dropdown } from 'react-bootstrap';

const HeaderSlotComponent = () => {
  return (
    <div className="header">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">SWT301</Breadcrumb.Item>
        <Breadcrumb.Item active>Software Testing</Breadcrumb.Item>
      </Breadcrumb>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          All Activities
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Activity 1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Activity 2</Dropdown.Item>
          {/* Add more dropdown items here */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default HeaderSlotComponent;

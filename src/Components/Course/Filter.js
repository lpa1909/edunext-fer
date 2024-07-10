import React, { useState } from 'react';
import '../../Css/Filter.css';

const Filter = () => {
    const [show, setShow] = useState(true);

    const handleShow = () => {
        setShow(!show);
    };

    return (
        <div className='filter'>
            {show && (
                <div className='row'>
                    <div className='col-md-2'>
                        <h6 className='title-h5'>Filter activities</h6>
                        <select id="activities" className='option-activities'>
                            <option>All Activities</option>
                            <option>Hidden</option>
                            <option>Cancelled</option>
                            <option>Completed</option>
                            <option>Not Started</option>
                            <option>Assigment or Feedback</option>
                        </select>
                    </div>
                    <div className='col-md-1 jumb-slot'>
                        <h6 className='title-h5'>Jump slot</h6>
                        <select id="slot" className='option-slot'>
                            <option>Slot: 1</option>
                            <option>Slot: 2</option>
                            <option>Slot: 3</option>
                            <option>Slot: 4</option>
                            <option>Slot: 5</option>
                            <option>Slot: 6</option>
                            <option>Slot: 7</option>
                            <option>Slot: 8</option>
                            <option>Slot: 9</option>
                            <option>Slot: 10</option>
                        </select>
                    </div>
                    <div className='col-md-3 class-name'>
                        <h6 className='title-h5'>Class name</h6>
                        <select id="class" className='option-class'>
                            <option value="SUMMER2024">SE1835-NJ-APHL-SUMMER2024</option>
                        </select>
                    </div>
                    <div className='col-md-2 filter-butter'>
                        <button className='filter-butter-leaning'>LEARNING MATERIAL</button>
                    </div>
                    <div className='col-md-3 filter-butter'>
                        <button className='filter-butter-ass'>ASSIGNMENTS</button>
                    </div>
                </div>
            )}
            <div className='show'>
                <button className='button-show' onClick={handleShow}>
                    SHOW/HIDE(ẨN/HIỆN)
                </button>
            </div>
        </div>
    );
};

export default Filter;

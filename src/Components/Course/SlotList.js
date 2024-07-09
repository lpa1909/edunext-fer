import '../../Css/SlotList.css';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CourseContext } from '../../Context/CourseContext';

const SlotList = () => {
    const context = useContext(CourseContext);
    const { id } = useParams();
    const [visibleSlot, setVisibleSlot] = useState(null);

    if (!context) {
        return <h2>Context not available</h2>;
    }

    const { courses } = context;
    const course = courses.find(c => c.courseID === parseInt(id));

    if (!course) {
        return <h2>Course not found</h2>;
    }

    const toggleQuestions = (slotID) => {
        setVisibleSlot(visibleSlot === slotID ? null : slotID);
    };

    return (
        <div className="slot-list">
            {course.slots ? (
                course.slots.map(slot => (
                    <div key={slot.slotID} className="slot">
                        <button className='slot-button' onClick={() => toggleQuestions(slot.slotID)}>
                            <strong className='slot-name'>{slot.name}</strong> <br />
                            <div className='slot-date'>
                                <span>{slot.timeStart} {slot.date} - {slot.timeEnd} {slot.date}</span>
                            </div>
                            <div className='slot-title'>
                                <span>
                                {slot.title && slot.title.map((title, index) => (
                                    <div key={index} className="slot-title">{title}</div>
                                ))}
                                </span>
                                
                            </div>

                        </button>
                        {visibleSlot === slot.slotID && (
                            <div className="questions">
                                {slot.questions.map(q => (
                                    <div key={q.questionID} className="question">
                                        {q.questionText}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <p>No slots available for this course.</p>
            )}
        </div>
    );
}

export default SlotList;

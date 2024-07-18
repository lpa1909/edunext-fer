import '../../Css/SlotList.css';
import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CourseContext } from '../../Context/CourseContext';
import { FaRegCalendarAlt } from "react-icons/fa";

const SlotListTeacher = () => {
    const context = useContext(CourseContext);
    const { uid } = useParams();
    const { id } = useParams();
    const { slots, questions } = context;
    const filteredSlots = slots.filter(s => s.courseID === parseInt(uid));

    const [selectedSlotID, setSelectedSlotID] = useState(null);
    const [selectedQuestions, setSelectedQuestions] = useState([]);

    const handleSlotClick = (slotID) => {
        if (selectedSlotID === slotID) {
            setSelectedSlotID(null);
            setSelectedQuestions([]);
        } else {
            setSelectedSlotID(slotID);
            const slotQuestions = questions.filter(q => q.slotID === slotID);
            setSelectedQuestions(slotQuestions);
        }
    };

    return (
        <div className="slot-list">
            {filteredSlots.length > 0 ? (
                filteredSlots.map(slot => (
                    <div key={slot.slotID} className="slot">

                        <button className='slot-button' style={{position:'relative'}} onClick={() => handleSlotClick(slot.slotID)}>
                            <div style={{ color: 'blue', position:'absolute',top:'15px',right:'30px' }}>
                                <Link style={{fontWeight:'600',fontSize:'20px', textDecoration:'none'}} to={`/viewSlot/${id}/${slot.slotID}/${uid}`}>View Slot</Link>
                            </div>
                            <strong className='slot-name'>{slot.slotName}</strong> <br />

                            <div className='slot-date'>
                                <FaRegCalendarAlt />
                                <span>{slot.startTime} {slot.date} - {slot.endTime} {slot.date}</span>
                            </div>
                            <div className='slot-title'>
                                <span>
                                    {slot.title && slot.title.map((title, index) => (
                                        <div key={index} className="slot-title">{title}</div>
                                    ))}
                                </span>
                            </div>

                        </button>

                        <div className=''>
                            {selectedSlotID === slot.slotID && (
                                <div className="question-list">
                                    <h4>Questions:</h4>
                                    {selectedQuestions.length > 0 ? (
                                        selectedQuestions.map((question) => (
                                            <div key={question.questionID} className="question">
                                                <button>Q{question.questionID} {question.questionName}</button>
                                            </div>
                                        ))
                                    ) : (
                                        <p>No questions available for this slot.</p>
                                    )}
                                </div>
                            )}
                        </div>


                    </div>
                ))
            ) : (
                <p>No slots available for this course.</p>
            )}
        </div>
    );
}

export default SlotListTeacher;

import '../../Css/SlotList.css';
import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CourseContext } from '../../Context/CourseContext';
import { FaRegCalendarAlt } from "react-icons/fa";

const SlotList = () => {
    const context = useContext(CourseContext);
    const { id } = useParams();
    const {userID} = useParams();
    const { slots, questions } = context;
    const filteredSlots = slots.filter(s => s.courseID === parseInt(id));

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
                        <button className='slot-button' onClick={() => handleSlotClick(slot.slotID)}>
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
                                        selectedQuestions.map((question, index)=> (
                                            <div key={question.questionID} className="question">
                                                <button className='question-button'><Link to={`/answer/${question.questionID}/${userID}`}>Q{index + 1} {question.questionName}</Link></button>
                                                {/* <Button className='question-button' as={Link} to={`/answer/${question.questionID}`}></Button> */}
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

export default SlotList;

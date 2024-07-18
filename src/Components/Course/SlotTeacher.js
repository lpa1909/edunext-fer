import '../../Css/SlotList.css';
import React, { useContext, useEffect, useState } from 'react';
import { Form, Link, useNavigate, useParams } from 'react-router-dom';
import { CourseContext } from '../../Context/CourseContext';
import { FaBook, FaEdit, FaQuestionCircle, FaRegCalendarAlt, FaTrash } from "react-icons/fa";
import '@fortawesome/fontawesome-free/css/all.css';
import axios from 'axios';

const SlotTeacher = () => {
    const navigate = useNavigate()
    const context = useContext(CourseContext);
    const { uid } = useParams();
    const { cid } = useParams();
    const { id } = useParams();
    const [Q, setQ] = useState('');
    const [S, setS] = useState('');
    const [checkButton, setButton] = useState('active')
    const { slots, questions, courses, setQuestions, users } = context;
    const filteredSlots = slots.filter(s => s.slotID === parseInt(uid));
    const filteredCourse = courses.find(s => s.courseID === parseInt(cid));
    const filterQuestion = questions.filter(q => q.slotID === parseInt(uid))
    const filterUser = users.find(q => q.id === parseInt(id))

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


    if (!filteredCourse) {
        return <h2>Course not found</h2>;
    }

    const handleDelete = async (id) => {
        let confirm = window.confirm("You want to delete?")
        if (confirm) {
            await axios.delete(`http://localhost:9999/questions/${id}`);
            window.location.reload();
        }
    };

    const createPlayer = async () => {
        const classID = parseInt(filterUser.classID)
        const questionID = parseInt(uid)
        const questionName = Q
        const courseID = parseInt(cid)
        const slotID = parseInt(uid)
        const status = S == "true" ? true : false
        let min =2
        let max = 1000
        const id = Math.ceil(Math.random()*(max-min))
        const post = { questionID, questionName, courseID, slotID, classID, status,id};
        await axios.post('http://localhost:9999/questions', post);
    }



    const handleToggleCourse = () => {
        // navigate(`/viewSlot/${id}/${uid}/${cid}`);
    }


    const handleToggleProject = () => {
        //  navigate(`/viewProject/${id}`);

    }
    return (
        <div className="slot-list">
            {filteredSlots.length > 0 ? (
                filteredSlots.map(slot => (
                    <div key={slot.slotID} className="slot">
                        <button className='slot-button ' style={{ position: 'relative', width: '210px', padding: '10px' }} onClick={() => handleSlotClick(slot.slotID)}>
                            <span >SHOW INFO SESSIONS</span>
                        </button>
                        <div className='slot-date  my-3'>
                            <FaRegCalendarAlt />
                            <span> {slot.startTime} {slot.date} - {slot.endTime} {slot.date} <FaBook style={{ marginLeft: '15px' }} className="course-icon" />   {filteredCourse.courseName}-{`[${filteredCourse.semester}]`}</span>
                        </div>



                        <div className=''>
                            {selectedSlotID === slot.slotID && (

                                <div className='slot-title'>
                                    <span>
                                        {slot.title && slot.title.map((title, index) => (
                                            <div key={index} className="slot-title">{title}</div>
                                        ))}
                                    </span>
                                </div>

                            )}
                        </div>

                        <button className='slot-button '>
                            <div className="question-list">
                                <div className="tabs">
                                    <Link style={{ fontSize: '20px', textDecoration: 'none' }} className={checkButton === 'active' ? "tab active" : "tab"} onClick={() => (handleToggleCourse(), setButton('active'))}>Content</Link>
                                    <Link style={{ fontSize: '20px', textDecoration: 'none' }} className={checkButton === 'prj' ? "active tab " : "tab"} onClick={() => (setButton('prj'), handleToggleProject())}>Student</Link>
                                </div>
                                {filterQuestion.length > 0 ? (
                                    filterQuestion.map((question) => (
                                        <div className='my-3' style={{ padding: '3px', backgroundColor: '#ccc', borderRadius: '5PX' }} key={question.questionID} >
                                            <p className='my-2 mx-3' style={{ position: 'relative' }} ><FaQuestionCircle className="sidebar-icon" />  {question.questionName}  <FaTrash onClick={() => handleDelete(question.id)} style={{ position: 'absolute', right: '30px', top: '20px' }}></FaTrash></p>

                                        </div>
                                    ))
                                ) : (
                                    <p>No questions available for this slot.</p>
                                )}
                            </div>
                        </button>


                    </div>
                ))
            ) : (
                <p>No slots available for this course.</p>
            )}

            <div>
                <h2 className='text-center'>Add question</h2>

                <form
                    className='mt-5 text-center'
                    style={{ width: "60vw", margin: "auto" }}
                >

                    <input value={Q} name="title"
                        placeholder="input Question"
                        onChange={(e) => setQ(e.target.value)} className='my-3' style={{ padding: '10PX', width: '300px', border:'1px solid gray', borderRadius:'5PX' }} /> <br />

                    <select className='my-3' value={S} onChange={(e) => setS(e.target.value)} style={{width:'300px'}}>
                        <option>status</option>
                        <option value={true} >Action</option>
                        <option value={false} >UnAction</option>
                    </select> <br/>

        


                    <button className='btn btn-success' onClick={createPlayer}>Add Player</button>

                </form>
            </div>
        </div>
    );
}

export default SlotTeacher;

import React, { useRef, useContext, useState } from "react";
import { Col, Row, Button, Container, Form } from "react-bootstrap";
import "../Css/Answer.css";
import { CourseContext } from "../Context/CourseContext";
import edunext from "../image/edunext.png";
import axios from "axios";
import { useParams } from 'react-router-dom';
import Entry from "./Entry";

const Answer = () => {
  const { answers, setAnswers, users, addAnswer, questions, setQuestions } = useContext(CourseContext);
  const [hover, setHover] = useState(null);
  const starMenuRef = useRef(null);
  const {questionID, userID} = useParams();
  const question = questions.find(q => q.questionID == questionID);
  const user = users.find(u => users.id == userID);

  const [answer, setAnswer] = useState({
    id: "",
    answerDetail: "",
    questionID: "",
    gradePoint: "",
    userID: "",
  });
  if (!question) {
    return <h2>Question not found</h2>;
  }

  const handleChange = (e) => {
    setAnswer({ ...answer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    addAnswer(question.questionID, userID, answer);
    setAnswer({
      id: "",
      answerDetail: "",
      questionID: "",
      gradePoint: "",
      userID: "",
    });
  };

 

  const handleMouseEnterVote = (answerID) => {
    setHover(answerID);
  };

  const handleMouseLeaveVote = (event) => {
    if (!starMenuRef.current.contains(event.relatedTarget)) {
      setHover(null);
    }
  };

  const handleMouseEnterStars = () => {
    // Do nothing on entering stars
  };

  const handleMouseLeaveStars = () => {
    setHover(null);
  };

  const handleOnClick = async (answerID, grade) => {
    try {
        const answerUpdate = answers.find(a => a.id == answerID);
        
        console.log("answerUpdate: ", answerUpdate);
        if(!answerUpdate){
            console.log("answer is not valid");
            return;
        }
        const currentGradePoint = answerUpdate.gradePoint !== null ? parseInt(answerUpdate.gradePoint) : 0;
      const response = await axios.put(`http://localhost:9999/answerM/${answerID}`, { 
        ...answerUpdate,
        gradePoint: currentGradePoint + grade, 
    });
    console.log("data" ,response.data);
      setAnswers((prevAnswers) =>
        prevAnswers.map((a) => (a.id === answerID ? response.data : a))
      );
    } catch (error) {
      console.error("Lỗi khi cập nhật gradePoint:", error);
    }
  };

//   const handleOnClick = (answerID, grade) => {
    
//   };

  return (
    <Container className="container">
      <Row>
        <Col md={8}>
        <h1>(Question) 【CODE-91105】 CQ11.1</h1>
        <Col xs={12} md={8} className="question">
          <div className="question-content">
            <h2 className="content-heading">Content</h2>
            <p className="content-question">
              {question.questionName}
            </p>
          </div>
        </Col>
        <Col xs={12} md={8} className="discussion">
          <ul>
            <li>Discussion time has been started.</li>
            <li>
              Students can comment and vote for comments during this time.
            </li>
            <li>
              Current Timezone: You are currently in <span> Asia/Saigon </span>
              time zone<span> (GMT+7)</span>.
            </li>
          </ul>
        </Col>
        <Col xs={12} md={8} className="task">
          <div className="task-list">
            <span>GROUP</span>
            <span>DISCUSS</span>
            <span>GRADE</span>
            <span>TEACHER/S MESSAGE</span>
          </div>
        </Col>
        <Col xs={12} md={8}>
          <Form className="form-input" onSubmit={handleSubmit}>
            <Form.Group className="select">
              <Form.Control
                as="select"
                name="select"
                defaultValue="Voted"
                required
                className="select-voted"
              >
                <option value="Voted">Voted</option>
                <option value="Inside">Inside group</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="answer">
              <Form.Control
                type="text"
                name="answerDetail"
                value={answer.answerDetail}
                onChange={handleChange}
                required
                className="answer-input"
                autoComplete="off"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              SEND
            </Button>
          </Form>
        </Col>
        <Col xs={12} md={8} className="detail-answer">
          {answers.map((a) => {
            const user = users.find((u) => u.id == a.userID);
            return (
              <div className="user" key={a.id}>
                <div className="icon">
                  <div className="icon-image">
                    <img src={edunext} alt="User icon" />
                  </div>
                  <div className="icon-name">
                    <h3>{user ? user.name : "Anonymous"}</h3>
                  </div>
                </div>

                <div className="user-answer">
                  <p>{a.answerDetail}</p>
                  <div className="grade-point">
                    <span className="star gold star-grade">&#9733;</span>{" "}
                    {a.gradePoint ? a.gradePoint : 0}
                  </div>
                </div>
                <div className="user-action">
                  <span>Reply</span>
                  <span
                  ref={starMenuRef}
                    className="vote-text"
                    onMouseEnter={() => handleMouseEnterVote(a.id)}
                    onMouseLeave={handleMouseLeaveVote}
                  >
                    Vote
                  </span>
                  {hover === a.id && (
                    <div
                      className="stars-container"
                      ref={starMenuRef}
                      onMouseEnter={handleMouseEnterStars}
                      onMouseLeave={handleMouseLeaveStars}
                    >
                      <div
                        className="star-item item1"
                        onClick={() => handleOnClick(a.id, 4)}
                      >
                        <span className="star red">&#9733;</span> = 4{" "}
                        <span className="star gold">&#9733;</span>
                        
                      </div>
                      <div
                        className="star-item item2"
                        onClick={() => handleOnClick(a.id, 3)}
                      >
                        <span className="star blue">&#9733;</span> = 3{" "}
                        <span className="star gold">&#9733;</span>
                        
                      </div>
                      <div
                        className="star-item item3"
                        onClick={() => handleOnClick(a.id, 2)}
                      >
                        <span className="star green">&#9733;</span> = 2{" "}
                        <span className="star gold">&#9733;</span>
                       
                      </div>
                      <div
                        className="star-item item4"
                        onClick={() => handleOnClick(a.id, 1)}
                      >
                        <span className="star gray">&#9733;</span> = 1{" "}
                        <span className="star gold">&#9733;</span>
                        {/* <p className="remain">Remain: 20</p> */}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </Col>
        </Col>
        
        <Col md={4}>
            <div>
              <Entry/>
            </div>      
        </Col>
      </Row>
    </Container>
  );
};

export default Answer;

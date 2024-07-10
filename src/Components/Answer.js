import React, { useRef, useContext, useState } from "react";
import { Col, Row, Button, Container, Form } from "react-bootstrap";
import "../Css/Answer.css";
import { CourseContext } from "../Context/CourseContext";
import edunext from "../image/edunext.png";

const Answer = () => {
    const { answers, users, addAnswer } = useContext(CourseContext);
    const [answer, setAnswer] = useState({
        answerID: "",
        answerDetail: "",
        questionID: "",
        gradePoint: "",
        userID: "",
    });

    const handleChange = (e) => {
        setAnswer({ ...answer, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const questionId = 1;
        const userId = 2;
        addAnswer(questionId, userId, answer);
        setAnswer({
            answerID: "",
            answerDetail: "",
            questionID: "",
            gradePoint: "",
            userID: "",
        });
    };

    const [hover, setHover] = useState(null);
    const starMenuRef = useRef(null);

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

    return (
        <Container className="container">
            <Row>
                <h1>(Question) 【CODE-91105】 CQ11.1</h1>
                <Col xs={12} md={8} className="question">
                    <div className="question-content">
                        <h2 className="content-heading">Content</h2>
                        <p className="content-question">
                            Which functions/screens have you completed and ready for
                            demonstrating in the last iteration? What are pending issues with
                            each of those?
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
                <Col>
                    <Form className="form-input" onSubmit={handleSubmit}>
                        <Form.Group className="select">
                            <Form.Control
                                as="select"
                                name="select"
                                value=""
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
                        const user = users.find((u) => u.userID === a.userID);
                        return (
                            <div className="user" key={a.answerID}>
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
                                        <span className="star gold star-grade">&#9733;</span> {a.gradePoint ? a.gradePoint : 0}
                                    </div>
                                </div>
                                <div className="user-action">
                                    <span>Reply</span>
                                    <span
                                        className="vote-text"
                                        onMouseEnter={() => handleMouseEnterVote(a.answerID)}
                                        onMouseLeave={handleMouseLeaveVote}
                                    >
                                        Vote
                                    </span>
                                    {hover === a.answerID && (
                                        <div
                                            className="stars-container"
                                            ref={starMenuRef}
                                            onMouseEnter={handleMouseEnterStars}
                                            onMouseLeave={handleMouseLeaveStars}
                                        >
                                            <div className="star-item item1">
                                                <span className="star red">&#9733;</span> = 4{" "}
                                                <span className="star gold">&#9733;</span>
                                                <p className="remain">Remain: 20</p>
                                            </div>
                                            <div className="star-item item2">
                                                <span className="star blue">&#9733;</span> = 3{" "}
                                                <span className="star gold">&#9733;</span>
                                                <p className="remain">Remain: 20</p>
                                            </div>
                                            <div className="star-item item3">
                                                <span className="star green">&#9733;</span> = 2{" "}
                                                <span className="star gold">&#9733;</span>
                                                <p className="remain">Remain: 20</p>
                                            </div>
                                            <div className="star-item item4">
                                                <span className="star gray">&#9733;</span> = 1{" "}
                                                <span className="star gold">&#9733;</span>
                                                <p className="remain">Remain: 20</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </Col>
            </Row>
        </Container>
    );
};

export default Answer;

import React from 'react';

const Star = () => {
    return (
        <div>
            <div className="stars-container">
                                            <div className="star-item">
                                                <span className="star red">&#9733;</span> = 4 <span className="star gold">&#9733;&#9733;&#9733;&#9733;</span>
                                                <p>Remain: 20</p>
                                            </div>
                                            <div className="star-item">
                                                <span className="star blue">&#9733;</span> = 3 <span className="star gold">&#9733;&#9733;&#9733;</span>
                                                <p>Remain: 20</p>
                                            </div>
                                            <div className="star-item">
                                                <span className="star green">&#9733;</span> = 2 <span className="star gold">&#9733;&#9733;</span>
                                                <p>Remain: 20</p>
                                            </div>
                                            <div className="star-item">
                                                <span className="star gray">&#9733;</span> = 1 <span className="star gold">&#9733;</span>
                                                <p>Remain: 20</p>
                                            </div>
                                        </div>
        </div>
    );
};

export default Star;
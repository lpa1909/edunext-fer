import React, { useState } from 'react';
import './../Css/Entry.css';
import UpdateMeeting from './UpdateMeeting'; // Import the modal component

const Entry = () => {
  const [update, setUpdate] = useState(false);

  const handleOpenUpdate = () => {
    setUpdate(true);
  };

  const handleCloseUpdate = () => {
    setUpdate(false);
  };

  return (
    <div className='entry'>
      <div className='group-meeting'>
        <h3>Group meeting</h3>
        <span>No meeting video link, click the below button to update</span>
        <button onClick={handleOpenUpdate}>UPDATE</button>
      </div>
      <div className='individual-grade'>
        <h3>Individual grade</h3>
        <span>You need grade on groupmates to view your points</span>
        <button>GRADING FOR GROUPMATES</button>
      </div>
      <div className='chart-summary'>
        <h3>Chart summary</h3>
        <div className='icon'>
          <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1yd3jbs" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SignalCellularAltIcon"><path d="M17 4h3v16h-3zM5 14h3v6H5zm6-5h3v11h-3z"></path></svg>
          <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-l16pk8" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BubbleChartOutlinedIcon"><path d="M7 10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m8.01-1c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M16.5 3C13.47 3 11 5.47 11 8.5s2.47 5.5 5.5 5.5S22 11.53 22 8.5 19.53 3 16.5 3m0 9c-1.93 0-3.5-1.57-3.5-3.5S14.57 5 16.5 5 20 6.57 20 8.5 18.43 12 16.5 12"></path></svg>
          <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-l16pk8" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TrendingDownIcon"><path d="m16 18 2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"></path></svg>
        </div>
        <h3>Call video</h3>
        <button>JOIN STREAM</button>
      </div>
      <UpdateMeeting open={update} handleClose={handleCloseUpdate} />
    </div>
  );
};

export default Entry;

import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const UpdateMeeting = ({ open, handleClose }) => {
  const [meetingCode, setMeetingCode] = useState('');

  const handleSave = () => {
    console.log('Meeting code saved:', meetingCode);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="update-meeting-dialog-title">
      <DialogTitle id="update-meeting-dialog-title">
        Update Meeting Video Link
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <p>Add meeting video code</p>
        <span>https://meet.google.com/</span>
        <TextField
          autoFocus
          margin="dense"
          id="meeting-code"
          label="code"
          type="text"
          fullWidth
          variant="outlined"
          value={meetingCode}
          onChange={(e) => setMeetingCode(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateMeeting;

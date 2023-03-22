import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
  return (
    <div>
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>

          <TextField
            id="outlined-textarea"
            label="First Name"
            placeholder="First Name"
            multiline
          />
          <TextField
            id="outlined-textarea"
            label="Last Name"
            placeholder="Last Name"
            multiline
          />
          <TextField
            id="outlined-textarea"
            label="Email"
            placeholder="Email"
            multiline
          />
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
          />
        </div>
      </Box>
    </div>
  );
}
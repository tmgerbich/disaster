import './App.css';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function AddPost({ addPost }) {
  const [id, setId] = useState('');
  const [post, setPost] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost(id, post);
    setId('');
    setPost('');
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField 
        id="user-id" 
        label="UserID" 
        variant="outlined" 
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <TextField 
        id="post" 
        label="Post" 
        variant="outlined" 
        multiline 
        rows={4} 
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />
      <Button variant="contained" type="submit">Submit</Button>
    </Box>
  );
}

import './App.css';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function AddPost() { 
    const [id, setId] = useState('');
    const [post, setPost] = useState('');
    const [posts, setPosts] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setPosts([...posts, { id, post }]);  //this should get written to storage instead
        setId('');
        setPost('');
    }

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

      {/* this will later be in another function and get pulled from storage */}
      <div>{posts.map((post, index) => (
        <div key={index}>
            <h3>User ID: {post.id}</h3>
            <p>{post.post}</p>
        </div>
      ))}
      </div>
    </Box>
  );
}

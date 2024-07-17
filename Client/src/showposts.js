import './App.css';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ShowPosts({ posts, editPost, deletePost }) {

  const handleEdit = (index) => {
    const updatedPost = prompt("Edit your post:", posts[index].body);
    if (updatedPost) {
      editPost(index, { ...posts[index], post: updatedPost });
    }
  };

  const handleDelete = (index) => {
    deletePost(index);
  };

  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > :not(style)': { m: 1, width: '50ch' }
      }}
    >
      {posts.map((post, index) => (
        <div key={index}>
          <h3>User ID: {post.userId}</h3>
          <p>{post.body}</p>
          <Button onClick={() => handleEdit(index)}>Edit</Button>
          <Button onClick={() => handleDelete(index)}>Delete</Button>
        </div>
      ))}
    </Box>
  );
}

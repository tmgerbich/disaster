import "./App.css";
import React, { useState, useEffect } from "react";
import AddPost from "./addpost";
import PrimarySearchAppBar from "./searchnav";
import Sidebar1 from "./sidebar1";
import Sidebar2 from "./sidebar2";
import ShowPosts from "./showposts";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('/api/posts/get/allposts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const addPost = async (uid, postBody) => {
    try {
      const response = await axios.post('/api/posts/post/posttodb', {
        body: postBody,
        userId: uid, 
        author: 'exampleUser',
        dateCreated: new Date(),
        likeUserIds: [], 
        likes: 0
      });
      setPosts([...posts, response.data]);
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  const editPost = async (index, updatedPost) => {
    try {
      const post = posts[index];
      const response = await axios.put(`/api/posts/put/post`, { body: updatedPost.post, uid: post.userId, pid: post.pid, username: post.author });
      const newPosts = posts.map((p, i) => (i === index ? response.data : p));
      setPosts(newPosts);
    } catch (error) {
      console.error('Error editing post:', error);
    }
  };
  
  const deletePost = async (index) => {
    try {
      const post = posts[index];
      await axios.delete(`/api/posts/delete/post`, { data: { post_id: post.pid } });
      const newPosts = posts.filter((_, i) => i !== index);
      setPosts(newPosts);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };
  

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <PrimarySearchAppBar />
      <Container maxWidth="lg" style={{ marginTop: '60px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Sidebar1 />
          </Grid>
          <Grid item xs={12} md={6}>
            <AddPost addPost={addPost} />
            <ShowPosts posts={posts} editPost={editPost} deletePost={deletePost} />
          </Grid>
          <Grid item xs={12} md={3}>
            <Sidebar2 />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;

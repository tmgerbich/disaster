import './App.css';
import React, { useState, useEffect } from 'react';
import AddPost from './addpost'; 
import PrimarySearchAppBar from './searchnav';
import ShowPosts from './showposts';

function App() {
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('posts')) || []);

  const addPost = (id, post) => {
    const newPosts = [...posts, { id, post }];
    setPosts(newPosts);
    localStorage.setItem('posts', JSON.stringify(newPosts)); // Save to local storage
  };

  const editPost = (index, updatedPost) => {
    const newPosts = posts.map((post, i) => (i === index ? updatedPost : post));
    setPosts(newPosts);
    localStorage.setItem('posts', JSON.stringify(newPosts)); 
  };

  const deletePost = (index) => {
    const newPosts = [...posts];
    newPosts.splice(index, 1);
    setPosts(newPosts);
    localStorage.setItem('posts', JSON.stringify(newPosts)); 
  }

  const loadPosts = () => {
    setPosts(JSON.parse(localStorage.getItem('posts')))
  }

  useEffect(() => {
    loadPosts();
  }
, [posts]) //rerender when there is a change in posts

  return (
    <div>
      <PrimarySearchAppBar />
      <AddPost addPost={addPost} />
      <ShowPosts posts={posts} editPost={editPost} deletePost={deletePost} />
    </div>
  );
}

export default App;

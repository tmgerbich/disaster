import './App.css';
import React from 'react';
import AddPost from './addpost'; 
import PrimarySearchAppBar from './searchnav';

function App() {
  return (
    <div>
      <PrimarySearchAppBar />
      <AddPost />
    </div>
  );
}

export default App;

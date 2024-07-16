import "./App.css";
import React from "react";
import AddPost from "./addpost";
import PrimarySearchAppBar from "./searchnav";
import Sidebar from "./sidebar1";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function App() {
  return (
    <div>
      <PrimarySearchAppBar />
      <Container maxWidth="lg" style={{ marginTop: '60px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={6}>
            <AddPost />
          </Grid>
          <Grid item xs={12} md={3}>
            <Sidebar />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;

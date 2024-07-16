import "./App.css";
import React from "react";
import AddPost from "./addpost";
import PrimarySearchAppBar from "./searchnav";
import Sidebar1 from "./sidebar1";
import Sidebar2 from "./sidebar2";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function App() {
  return (
    <Box sx={{ bgcolor: 'black', minHeight: '100vh' }}>
      <PrimarySearchAppBar />
      <Container maxWidth="lg" style={{ marginTop: '60px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Sidebar1 />
          </Grid>
          <Grid item xs={12} md={6}>
            <AddPost />
          </Grid>
          <Grid item xs={12} md={3}>
            <Sidebar2 />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;

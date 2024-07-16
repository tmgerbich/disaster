import React from 'react';
import './sidebar.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

const Sidebar = () => {
  return (
    <Box className="sidebar" bgcolor="background.paper" p={3} borderRadius={2} textAlign="center">
      <Box mb={3}>
        <Avatar
          src="images/cat.jpeg"
          alt="Profile"
          sx={{ width: 100, height: 100, margin: '0 auto' }}
        />
      </Box>
      <Box mb={3}>
        <Typography variant="h5">John Doe</Typography>
        <Typography variant="body2" color="textSecondary">Graphic Designer at Self Employed</Typography>
      </Box>
      <Box display="flex" justifyContent="space-around" mb={3}>
        <Box textAlign="center">
          <Typography variant="body2">Following</Typography>
          <Typography variant="h6">34</Typography>
        </Box>
        <Box textAlign="center">
          <Typography variant="body2">Followers</Typography>
          <Typography variant="h6">155</Typography>
        </Box>
      </Box>
      <Button variant="contained" color="secondary">View Profile</Button>
    </Box>
  );
};

export default Sidebar;

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const trends = [
  { category: 'Trending in Indonesia', topics: ['#Minions', '#SeninBarokah'] },
  { category: 'NFT • Trending', topics: ['#Tacos'] },
  { category: 'FOOTBALL • TRENDING', topics: ['#MUFC', '#Rangnick', '#TnTsn', '#TxQla'] },
];

const Sidebar2 = () => {
  return (
    <Box className="sidebar" p={3} borderRadius={2} textAlign="left" sx={{ bgcolor: '#1e2a38', color: 'white', height: '100vh', overflowY: 'auto' }}>
      <Typography variant="h6" mb={2}>
        Trend for you
      </Typography>
      <Divider sx={{ bgcolor: 'grey.700' }} />
      <List>
        {trends.map((trend, index) => (
          <Box key={index} mt={2}>
            <Typography variant="subtitle2" sx={{ color: 'grey.300' }}>{trend.category}</Typography>
            {trend.topics.map((topic, idx) => (
              <ListItem key={idx} disableGutters>
                <ListItemText primary={topic} primaryTypographyProps={{ sx: { color: 'white' } }} />
              </ListItem>
            ))}
            {index < trends.length - 1 && <Divider sx={{ bgcolor: 'grey.700' }} />}
          </Box>
        ))}
      </List>
      <Typography variant="body2" sx={{ color: 'blue', mt: 2 }}>
        Show More
      </Typography>
    </Box>
  );
};

export default Sidebar2;

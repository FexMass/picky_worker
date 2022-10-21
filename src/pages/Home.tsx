import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Home: React.FunctionComponent = () => {
  return (
    <Box
      maxWidth="xl"
      sx={{
        overflow: 'hidden', width: '100vw', height: '100vh', px: '20%', py: '20%', backgroundColor: '#053D4D',
      }}
    >
      <Typography variant="h1" color="white">React Typescript Project Template</Typography>
      <Button
        variant="contained"
        color="secondary"
        href="/theme"
      >
        Click here to view MUI theme
      </Button>
    </Box>
  );
};

export default Home;

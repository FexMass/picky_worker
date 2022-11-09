import React from 'react';
import {
  Box, Typography, Button, Link
} from '@mui/material';

const Home: React.FunctionComponent = () => {
  return (
    <Box
      maxWidth="xl"
      sx={{
        overflow: 'hidden', width: '100vw', height: '100vh', px: '20%', py: '20%', backgroundColor: '#053D4D',
      }}
    >
      <Typography variant="h1" color="white">Picky Worker</Typography>
      <Button
        variant="contained"
        color="secondary"
        href="/theme"
      >
        Click here to view MUI theme
      </Button>
      <Box width="100vw" height="10vh" />
      <Typography variant="h4" color="white">Interactive map investigation:</Typography>
      <Typography variant="body1" paragraph color="white">
        Leaflet is the chosen one because it is easy to set up, lightweight, customizable, scalable and always free.
        <br />
        Live demos below:
        <br />
        <Link href="/cesium" color="inherit">Cesium.js</Link>
        <br />
        <Link href="/mapbox" color="inherit">Mapbox GL JS</Link>
        <br />
        <Link href="/leaflet" color="inherit">Leaflet.js</Link>
      </Typography>
    </Box>
  );
};

export default Home;

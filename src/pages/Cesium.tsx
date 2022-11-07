import React from 'react';
import { Grid, Typography } from '@mui/material';
import { CesiumWidget } from 'resium';
import {
  Ion, SceneMode, Rectangle, Camera
} from 'cesium';

const Cesium: React.FunctionComponent = () => {
  // eslint-disable-next-line max-len
  Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1MGQ3Y2QyZS04OWQxLTQ5ZjctYjdjNC0zMzVkMmQ3ZWEwYTkiLCJpZCI6MTEzOTM0LCJpYXQiOjE2Njc4MDUwOTF9.GH93XNeUrXemG7EPx6w5mGbBoix1iXqrYY6hR0Z90ew';
  const position = Rectangle.fromDegrees(79, 40, 71, 45);
  Camera.DEFAULT_VIEW_RECTANGLE = position;
  Camera.DEFAULT_VIEW_FACTOR = 0.01;

  return (
    <Grid container justifyContent="center" sx={{ mt: 5 }}>
      <Grid item xs={10}>
        <Typography variant="h4">Interactive map using Resium and Cesium.js</Typography>
        <CesiumWidget full={false} useBrowserRecommendedResolution sceneMode={SceneMode.SCENE2D} />
      </Grid>
    </Grid>
  );
};

export default Cesium;

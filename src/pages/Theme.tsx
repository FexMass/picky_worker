import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Theme: React.FunctionComponent = () => {
  return (
    <>
      <Box
        maxWidth="xl"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          mx: 10,
          my: 5,
          gap: 2,
        }}
      >
        <Typography variant="h1" color="primary">Title 1</Typography>
        <Typography variant="h2" color="secondary">Title 2</Typography>
        <Typography variant="h3">Title 3</Typography>
        <Typography variant="h4">Title 4</Typography>
        <Typography variant="h5">Title 5</Typography>
        <Typography variant="h6">Title 6</Typography>
        <Typography variant="subtitle1">Subtitle 1</Typography>
        <Typography variant="subtitle2">Subtitle 2</Typography>
        <Typography variant="body1">Text 1</Typography>
        <Typography variant="body2">Text 2</Typography>
      </Box>
      <Box
        maxWidth="xl"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          overflow: 'hidden',
          px: 10,
          py: 3,
          gap: 5,
        }}
      >
        <Button variant="contained" color="primary">Contained Primary</Button>
        <Button variant="contained" color="secondary">Contained Secondary</Button>
        <Button variant="contained" color="error">Contained Error</Button>
        <Button variant="contained" color="success">Contained Success</Button>
        <Button variant="contained" color="warning">Contained Warning</Button>
      </Box>
      <Box
        maxWidth="xl"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          overflow: 'hidden',
          px: 10,
          py: 3,
          gap: 5,
        }}
      >
        <Button variant="outlined" color="primary">Outlined Primary</Button>
        <Button variant="outlined" color="secondary">Outlined Secondary</Button>
        <Button variant="outlined" color="error">Outlined Error</Button>
        <Button variant="outlined" color="success">Outlined Success</Button>
        <Button variant="outlined" color="warning">Outlined Warning</Button>
      </Box>
      <Box
        maxWidth="xl"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          overflow: 'hidden',
          px: 10,
          py: 3,
          gap: 5,
        }}
      >
        <Button variant="text" color="primary">Text Primary</Button>
        <Button variant="text" color="secondary">Text Secondary</Button>
        <Button variant="text" color="error">Text Error</Button>
        <Button variant="text" color="success">Text Success</Button>
        <Button variant="text" color="warning">Text Warning</Button>
      </Box>
    </>
  );
};

export default Theme;

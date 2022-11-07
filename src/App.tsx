import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './styles';

import {
  Home, Theme, Cesium, MapBox
} from './pages';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/theme" element={<Theme />} />
          <Route path="/cesium" element={<Cesium />} />
          <Route path="/mapbox" element={<MapBox />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

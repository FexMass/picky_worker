import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './styles';

import { Home, Theme } from './pages';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/theme" element={<Theme />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

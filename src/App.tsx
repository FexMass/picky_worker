/* eslint-disable */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './styles';
import appRoutes from './Components/routing/routes';
import MyForm from './Components/forms/RegisterForm';

// import { Home, Theme } from './pages';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <Routes>
          {appRoutes.map(route => {
            return (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

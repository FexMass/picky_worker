import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const COLORS = {
  white: '#ffffff',
  black: '#000000',
  eerieBlack: '#212121',
  silver: '#c6c6c6',
  midnightGreen: '#053D4D',
  blueSapphire: '#096B86',
  gunMetal: '#042E39',
  CGBlue: '#0A7B9A',
  blueGreen: '#0C99C0',
  mintCream: '#F7FFF6',
  honeyDew: '#EDFFEB',
  seaGreen: '#00A5A3',
  robinEgg: '#00CCC9',
  skobeloff: '#007A78',
  turquoise: '#04D0C6',
  chineseRed: '#DB571A',
  lightSalmon: '#F0A37F',
  kobe: '#80330F',
};

// eslint-disable-next-line prefer-const
let customTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: COLORS.midnightGreen,
      light: COLORS.blueSapphire,
      dark: COLORS.gunMetal,
    },
    secondary: {
      main: COLORS.CGBlue,
      light: COLORS.blueGreen,
    },
    background: {
      default: COLORS.white,
      paper: COLORS.white,
    },
    text: {
      primary: COLORS.eerieBlack,
      secondary: COLORS.black,
      disabled: COLORS.silver,
    },
    error: {
      main: COLORS.chineseRed,
      light: COLORS.lightSalmon,
      dark: COLORS.kobe,
    },
    success: {
      main: COLORS.seaGreen,
      light: COLORS.robinEgg,
      dark: COLORS.skobeloff,
    },
    warning: {
      main: COLORS.gunMetal,
      dark: COLORS.silver,
    },
  },
  typography: {
    h1: {
      fontFamily: 'Viga',
      fontWeight: 400,
      textTransform: 'uppercase',
      fontSize: '2rem',
    },
    h2: {
      fontFamily: 'Rubik',
      fontWeight: 600,
      fontSize: '1.7rem',
    },
    h3: {
      fontFamily: 'Rubik',
      fontWeight: 600,
      fontSize: '1.5rem',
      fontStyle: 'italic',
    },
    h4: {
      fontFamily: 'Rubik',
      fontWeight: 400,
      fontSize: '1.4rem',
    },
    h5: {
      fontFamily: 'Rubik',
      fontWeight: 300,
      fontStyle: 'italic',
      fontSize: '1.3rem',
    },
    h6: {
      fontFamily: 'Rubik',
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: '1.2rem',
    },
    subtitle1: {
      fontFamily: 'Rubik',
      fontWeight: 500,
      fontSize: '1rem',
    },
    subtitle2: {
      fontFamily: 'Rubik',
      fontWeight: 700,
      fontSize: '1rem',
    },
    body1: {
      fontFamily: 'Rubik',
      fontWeight: 300,
      fontSize: '1rem',
      color: COLORS.eerieBlack,
    },
    body2: {
      fontFamily: 'Rubik',
      fontWeight: 300,
      fontStyle: 'italic',
      fontSize: '1rem',
      color: COLORS.eerieBlack,
    },
    button: {
      fontFamily: 'Rubik',
      fontWeight: 500,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 900,
      md: 1100,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const theme = responsiveFontSizes(customTheme);

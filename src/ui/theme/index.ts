import type {} from '@mui/material/themeCssVarsAugmentation';
import { responsiveFontSizes, Theme, SxProps as MuiSxProps } from '@mui/material';
import {
  CssVarsTheme,
  createTheme,
  experimental_extendTheme as extendTheme,
} from '@mui/material/styles';

type AugmentedTheme = Omit<Theme, 'palette' | 'components'> & CssVarsTheme;

export type SxProps = MuiSxProps<AugmentedTheme>;

export const getTheme = () => createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#e4002b',
    },
    secondary: {
      main: '#982932',
    },
    background: {
      paper: '#fafafa',
      default: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#767676',
    },
  },
  typography: {
    fontFamily: 'Mulish',
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightLight: 400,
    fontWeightBold: 800,
    htmlFontSize: 18,
    h1: {
      fontFamily: 'Playfair Display',
    },
    h2: {
      fontFamily: 'Playfair Display',
    },
    h3: {
      fontFamily: 'Playfair Display',
    },
    h4: {
      fontFamily: 'Playfair Display',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: 'none'
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderColor: 'white'
        }),
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontWeight: 900
        }),
      },
    },
   
  }


});



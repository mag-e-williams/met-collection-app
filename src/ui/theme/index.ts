import type {} from '@mui/material/themeCssVarsAugmentation';
import { responsiveFontSizes, Theme, SxProps as MuiSxProps } from '@mui/material';
import {
  CssVarsTheme,
  experimental_extendTheme as extendTheme,
} from '@mui/material/styles';

type AugmentedTheme = Omit<Theme, 'palette' | 'components'> & CssVarsTheme;

export type SxProps = MuiSxProps<AugmentedTheme>;

export function getTheme(): Theme {
  const themeWithColorMode = extendTheme({
    typography: {
      fontFamily: [
        'Playfair Display',
        'Mulish',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: ({ theme }) => ({
            background: '#FAFAFA',
          }),
        },
      },
      MuiContainer: {
        defaultProps: {
          fixed: true,
        },
        styleOverrides: {
          root: ({ theme }) => ({
            padding: 0,
            [theme.breakpoints.up('sm')]: {
              maxWidth: 510,
              paddingLeft: 0,
              paddingRight: 0,
            },
            [theme.breakpoints.up('md')]: {
              maxWidth: 700,
            },
            [theme.breakpoints.up('lg')]: {
              maxWidth: 920,
            },
            [theme.breakpoints.up('xl')]: {
              maxWidth: 1130,
            },
          }),
        },
      },
      MuiTypography: {
        variants: [
          {
            props: { variant: 'h1' },
            style: ({ theme }) => ({
              color: '#333333',
              fontFamily: 'Playfair Display'
            }),
          },
          {
            props: { variant: 'h2' },
            style: ({ theme }) => ({
              color: '#333333',
              fontFamily: 'Playfair Display'
            }),
          },
          {
            props: { variant: 'h3' },
            style: ({ theme }) => ({
              color: '#FFFFFF',
              fontFamily: 'Playfair Display'
            }),
          },
          {
            props: { variant: 'h4' },
            style: ({ theme }) => ({
              color: '#FFFFFF',
              fontFamily: 'Playfair Display'
            }),
          },
          {
            props: { variant: 'h5' },
            style: ({ theme }) => ({
              color: '#333333',
              fontFamily: 'Playfair Display',
            }),
          },
          {
            props: { variant: 'h6' },
            style: ({ theme }) => ({
              color: '#333333',
              fontFamily: 'Playfair Display'
            }),
          },
          {
            props: { variant: 'body1' },
            style: ({ theme }) => ({
              color: '#767676',
              fontFamily: 'Mulish',
              fontSize: '12pt',
            }),
          },
          {
            props: { variant: 'body2' },
            style: ({ theme }) => ({
              color: '#767676',
              fontFamily: 'Mulish'

            }),
          },
        ],
        styleOverrides: {
          root: {
            // Resets the original value
            color: '#333333',
            textRendering: 'optimizeLegibility',
          },
        },
      },
    },
  });

  return responsiveFontSizes(themeWithColorMode, {
    variants: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'caption', 'overline', 'body1', 'body2'],
  });
}

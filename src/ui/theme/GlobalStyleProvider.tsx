import CssBaseline from '@mui/material/CssBaseline';
import { getTheme } from '.';
import { Experimental_CssVarsProvider as CssVarsProvider, ThemeProvider, createTheme } from '@mui/material/styles';

/**
 * Created just once per app lifecycle
 */
const theme = getTheme();

/**
 * Applies theming + reset + other global styles to the full app
 */
export function GlobalStyleProvider({ children }: { children: React.ReactNode }) {
  return (

    
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

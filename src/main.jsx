import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import App from'./App.jsx'
import customTheme from './theme';
import globalStyles from './globalStyles.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <CssVarsProvider theme={customTheme}>
  <CssBaseline enableColorScheme/> 
  {globalStyles}
  <App/>
  </CssVarsProvider>
  </StrictMode>
)

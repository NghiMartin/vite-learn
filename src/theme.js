// src/theme.js
import {  experimental_extendTheme as extendTheme } from '@mui/material/styles';
// Define your custom theme
const customTheme = extendTheme({
    cssVarPrefix: "",
    colorSchemes: {
        light: {
          palette: {
              background: {
                  default: '#ffff',
                },
                text: {
                  primary: '#173A5E',
                  secondary: '#46505A',
                },
          },
        },
        dark: {
          palette: {
              background: {
                  default: '#46505A',
                },
                text: {
                  primary: '#ffff',
                  secondary: '#46505A',
                },
          },
        },
      },
    components: {
        MuiTypography: {
          styleOverrides: {
            root: {
              fontFamily: "Montserrat, sans-serif"
            },
            h1: {
              fontSize: "2.5rem",
              color: "green"
            },
            p: {
              fontSize: "1.4rem"
            }
          }
        },
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "1.4rem"
            }
          }
        },
        MuiOutlinedInput: {
            styleOverrides: {
              root: {
                fontSize: '0.875rem',
                '& fieldset': { borderWidth: '0.5px !important' },
                '&:hover fieldset': { borderWidth: '1px !important' },
                '&.Mui-focused fieldset': { borderWidth: '1px !important' },
                borderRadius:'8rem'
              }
            }
          },
        MuiCssBaseline: {
          styleOverrides: {
            html: {
              fontSize: "62.5%"
            }
          }
        },

      },
   
  });
  
  export default customTheme;
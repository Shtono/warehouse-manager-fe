import { Palette, PaletteColorOptions, createTheme } from '@mui/material'
import { Shadows } from '@mui/material/styles/shadows'

type MissingPropertiesFromPalette =
  | 'mode'
  | 'augmentColor'
  | 'getContrastText'
  | 'contrastThreshold'
  | 'tonalOffset'
  | 'text'
  | 'divider'
  | 'action'
  | 'background'

export const themeObject = (() => {
  //               0  1  2  3   4   5   6   7   8   9   10
  const spacing = [0, 4, 8, 12, 16, 24, 32, 48, 64, 80, 96]
  const shape = { borderRadius: 4 }
  const shadows = [
    'none',
    '0px 0px 1px #254250, 0px 2px 2px #254250, 0px 1px 2px #254250',
    '0px 2px 4px #254250, 0px 2px 4px #254250, 0px 2px 4px #254250',
    '0px 4px 6px #254250, 0px 2px 8px #254250, 0px 3px 6px #254250',
    '0px 6px 8px #254250, 0px 4px 12px #254250 0px 4px 8px #254250',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
  ] as Shadows

  const palette = {
    primary: {
      100: '#E3EFFF',
      300: '#B3D4FF',
      500: '#467B94',
      700: '#25c8cb',
      900: '#0d171c',
      main: '#13222A',
      light: '#C6CFCE',
      dark: '#254250',
      contrastText: '#FFF',
    },
    secondary: {
      100: '#fce4f9',
      300: '#f38ce6',
      500: '#e115d0',
      700: '#b00fb0',
      900: '#8c0c8c',
      main: '#e115d0',
      light: '#f38ce6',
      dark: '#b00fb0',
      contrastText: '#FFFFFF',
    },
    // secondary: {
    //   100: '#E0FFE0',
    //   300: '#B3FFB3',
    //   500: '#00CC00',
    //   700: '#008800',
    //   900: '#004400',
    //   main: '#00CC00',
    //   light: '#B3FFB3',
    //   dark: '#008800',
    //   contrastText: '#FFFFFF',
    // },
    error: {
      100: '#FFEBEB',
      300: '#FF6B6B',
      500: '#FF0000',
      700: '#CC0000',
      900: '#990000',
      main: '#CC0000',
      light: '#FF6B6B',
      dark: '#990000',
      contrastText: '#FFFFFF',
    },
    warning: {
      100: '#FFF8E1',
      300: '#FFEB3B',
      500: '#FFC107',
      700: '#FF9800',
      900: '#FF5722',
      main: '#FF9800',
      light: '#FFEB3B',
      dark: '#FF5722',
      contrastText: '#FFFFFF',
    },
    success: {
      100: '#E8F5E9',
      300: '#66BB6A',
      500: '#4CAF50',
      700: '#388E3C',
      900: '#1B5E20',
      main: '#4CAF50',
      light: '#66BB6A',
      dark: '#388E3C',
      contrastText: '#FFFFFF',
    },
    info: {
      100: '#E3F2FD',
      300: '#64B5F6',
      500: '#2196F3',
      700: '#1976D2',
      900: '#0D47A1',
      main: '#1976D2',
      light: '#64B5F6',
      dark: '#0D47A1',
      contrastText: '#FFFFFF',
    },
    grey: {
      A100: '#f5f5f5',
      A200: '#eeeeee',
      A400: '#bdbdbd',
      A700: '#616161',
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      main: '#616161',
      light: '#9E9E9E',
      dark: '#212121',
    },
    common: {
      white: '#FFFFFF',
      black: '#000000',
    },
  } as Omit<Palette, MissingPropertiesFromPalette>

  const darkBackground = palette.primary[900 as keyof PaletteColorOptions]
  const borderColor = palette.primary.dark

  const typography = {
    fontFamily: '"Fustat", "Roboto", "Helvetica", "Arial", sans-serif',
  }

  const components = {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          backgroundColor: darkBackground,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: palette.primary.light,
          borderColor,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: palette.primary.light,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          borderColor: palette.primary.dark,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: darkBackground,
          color: palette.primary.contrastText,
          border: 'solid 1px',
          borderColor,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&:focus-visible': {
            outline: `4px auto ${palette.primary[700 as keyof PaletteColorOptions]}`,
          },
          '&:focus': {
            outline: `4px auto ${palette.primary[700 as keyof PaletteColorOptions]}`,
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: palette.primary[500 as keyof PaletteColorOptions],
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          boxShadow: shadows[0],
          backgroundColor: palette.primary[500 as keyof PaletteColorOptions],
          color: palette.primary.contrastText,
          '&:hover': {
            backgroundColor: palette.primary[300 as keyof PaletteColorOptions],
            color: palette.primary[900 as keyof PaletteColorOptions],
          },
        },
        outlined: {
          borderColor: palette.primary[500 as keyof PaletteColorOptions],
          color: palette.primary[500 as keyof PaletteColorOptions],
          '&:hover': {
            border: '1px solid',
            borderColor: palette.primary.light,
            color: palette.primary.contrastText,
          },
        },
        root: {
          color: 'white',
          '&.Mui-disabled': {
            color: palette.grey[700],
            backgroundColor: palette.grey[500],
          },
          '&:active': {
            border: 'none !important',
          },
          '&:focus': {
            outline: `4px auto ${palette.primary[700 as keyof PaletteColorOptions]}`,
          },
          '&:focus-visible': {
            outline: `4px auto ${palette.primary[700 as keyof PaletteColorOptions]}`,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:focus': {
            outline: `4px auto ${palette.primary[700 as keyof PaletteColorOptions]}`,
          },
          '&:focus-visible': {
            outline: `4px auto ${palette.primary[700 as keyof PaletteColorOptions]}`,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: palette.primary.light,
          color: palette.primary.dark,
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: palette.primary.light,
          color: palette.primary.dark,
          // border: '3px solid transparent',
          border: '3px solid',
          borderColor: palette.grey[300],
          '&:hover': {
            backgroundColor: palette.primary[500 as keyof PaletteColorOptions],
            border: '3px solid',
            borderColor: palette.grey[500],
          },
          '&.Mui-focused': {
            backgroundColor: palette.primary[500 as keyof PaletteColorOptions],
            border: '3px solid',
            borderColor,
          },
          '&.Mui-disabled': {
            border: '3px solid',
            borderColor: palette.grey[500 as keyof PaletteColorOptions],
            opacity: 0.5,
          },
          '&.Mui-disabled:before': {
            border: 'none',
          },
          '&:hover:not(.Mui-disabled):before': {
            border: 'none',
          },
          '&:before': {
            border: 'none',
          },
          '&:after': {
            border: 'none',
          },
        },
        input: {
          backgroundColor: palette.primary.light,
          color: palette.primary.dark,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        track: {
          backgroundColor: 'white',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: palette.primary.light,
          borderColor,
          '&.Mui-selected': {
            color: palette.primary.contrastText,
            backgroundColor: palette.primary[500 as keyof PaletteColorOptions],
          },
        },
      },
    },
  }
  return {
    shadows,
    spacing,
    shape,
    palette,
    typography,
    components,
  }
})()

export const theme = createTheme(themeObject)

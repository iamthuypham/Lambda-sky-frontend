import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      light: '#BD10E0',
      main: '#2A0678',
      dark: '#280547'
    },
    secondary: {
      main: '#F5A623'
    }
  },
  typography: {
    useNextVariants: true,
    fontSize: 16,
    htmlFontSize: 16,
    fontFamily: [
      '-apple-system',
      '"Helvetica Neue"',
      'sans-serif',
      '"Apple Color Emoji"'
    ].join(',')
  },
  spacing: {
    unit: 8
  },
  custom: {
    skyBackground: {
      background:
        'linear-gradient(to right, rgb(245,166,35) 0%, rgb(181,106,133) 100%, rgb(102,31,255) 100%)'
    }
  },
  overrides: {
    MuiButton: {
      text: {
        background: '#F5A623',
        borderRadius: 20,
        border: 0,
        padding: '3px 40px'
      }
    }
  }
});

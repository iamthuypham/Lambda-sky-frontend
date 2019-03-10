import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      light: '#BD10E0',
      main: '#661FFF',
      dark: '#521EC3',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#F5A623',
      dark: '#EF6003',
      contrastText: '#FFFFFF'
    },
    shade: {
      100: '#000000',
      70: '#424242'
    }
  },
  typography: {
    useNextVariants: true,
    fontSize: 16,
    htmlFontSize: 16,
    fontFamily: ['"Helvetica Neue"', 'sans-serif'].join(','),
    h2: {
      fontWeight: 800
    },
    h3: {
      fontWeight: 500
    },
    h4: {
      fontWeight: 100,
      fontSize: '2rem'
    },
    h6: {
      fontSize: '1.2rem'
    }
  },
  spacing: {
    unit: 8,
    percentage: 5
  },
  custom: {
    skyBackground:
      'linear-gradient(to right, rgb(245,166,35) 0%, rgb(181,106,133) 50%, rgb(102,31,255) 100%)',
    skyOpacityPrimary: 0.8,
    skyOpacitySecondary: 0.6,
    skyBoxShadow: `1px 1px 1px 1px #C8C8C8`
  },
  overrides: {
    MuiButton: {
      text: {
        borderRadius: 4
      }
    }
  }
});

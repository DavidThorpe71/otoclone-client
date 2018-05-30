import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#edffff',
      main: '#baddf9',
      dark: '#89abc6',
      contrastText: '#000000',
    },
    secondary: {
      light: '#ffbb93',
      main: '#ff8a65',
      dark: '#c75b39',
      contrastText: '#000000',
    },
  },
});

export default theme;
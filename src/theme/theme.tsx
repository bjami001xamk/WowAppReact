import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#064d94",
    },
    secondary: {
      main: green[500],
    },
    text: {
        primary: "#121212",
        secondary: "#f7f7f7"
    }
  },
  typography: {
    fontFamily: "sofia-pro, sans-serif",
    h1: {
      fontSize: 24
    },
    h2: {
      fontSize: 18,
      fontWeight: 700
    },
    h3: {
      fontSize: 36,
      fontWeight: 700,
      color:'lightskyblue'
    },
    h4: {
      color:"#ff7300",
      fontSize: 26
    },
    body1: {
      color:"#ff7300",
      fontSize: 16,
      fontWeight:600
    },
    body2: {
      fontSize: 12
    },
    subtitle1:{
      fontSize: 17
    }
  },
});

export default theme;

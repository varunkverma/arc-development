import { createMuiTheme } from "@material-ui/core/styles";

const arcColors = {
  blue: "#0B72B9",
  orange: "#FFBA60"
};

// palette object to customise the color theme
const palette = {
  common: {
    blue: arcColors.blue,
    orange: arcColors.orange
  },
  primary: {
    main: arcColors.blue
  },
  secondary: {
    main: arcColors.orange
  }
};

// Typography object to customise the font theme
const typography = {
  h3: {
    fontWeight: 300
  }
};

const theme = createMuiTheme({
  palette,
  typography
});

export default theme;

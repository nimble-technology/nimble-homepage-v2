export const theme = {
    root: {
      width: '100%',
    },
    palette: {
      mode: "light",
      primary: {
        main: "#1DF98F",
      },
      text: {
        primary: "#000000",
        secondary: "#161818",
      },
      background: {
        paper: "white",
        default: "white",
      },
    },
    typography: {
      fontFamily: ["Titillium Web", "sans-serif"].join(","),
      button: {
        textTransform: "none",
      },
      variant: {
        body1: {
          fontSize: "12px",
        },
        body2: {
          fontSize: "10px",
        },
      },
    },
    components: {
      MuiBottomNavigation: {
        backgroundColor: "white",
      },
      MuiInputBase: {
        color: "#ffffff",
        borderColor: "#ffffff",
      },
    },
    props: {
      MuiOutlinedInput: {
        notched: false,
      },
      MuiInputLabel: {
        shrink: true,
      },
    },
  };

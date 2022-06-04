import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#ffe600",
    grayLight: "#eeeeee",
    gray: "#666666",
    blue: "#3483fa",
  },
  space: {
    small: "16px",
    medium: "32px",
  },
  fontSizes: {
    extraSmall: "12px",
    small: "14px",
    medium: "16px",
    large: "18px",
    extraLarge: "24px",
    smallTitle: "28px",
    title: "46px",
  },
  borderRadius: {
    small: "4px",
    medium: "6px",
  },
};

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: ${theme.colors.grayLight};
    padding: 0;
    margin: 0;
    font-family: Proxima Nova, -apple-system, Helvetica Neue, Helvetica, Roboto,
      Arial, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

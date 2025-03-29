// src/styles/styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        main: string;
        light: string;
        dark: string;
      };
      background: {
        primary: string;
        secondary: string;
        tertiary: string;
        quaternary: string;
        quinary: string;
        senary: string;
        septenary: string;
        octonary: string;
        nonary: string;
        denary: string;
      };
      text: {
        primary: string;
        secondary: string;
        tertiary: string;
        quaternary: string;
        quinary: string;
      };
      border: {
        light: string;
        dark: string;
      };
      monochrome: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
    };
    shadows: {
      card: string;
      hover: string;
    };
    typography: {
      h1: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
      h2: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
      body: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}

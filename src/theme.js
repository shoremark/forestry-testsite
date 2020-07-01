// import { lighten } from 'polished';

// theme.js
const size = {
  phoneS: 320,
  phoneM: 375,
  phoneL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2000,
  desktopL: 2560,
};

const device = {
  phoneS: `(min-width: ${size.phoneS}px)`,
  phoneM: `(min-width: ${size.phoneM}px)`,
  phoneL: `(min-width: ${size.phoneL}px)`,
  tablet: `only screen and (min-width: ${size.tablet}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
  laptopL: `(min-width: ${size.laptopL}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
  desktopL: `(min-width: ${size.desktopL}px)`,
};

const lightTheme = {
  primary: '#191F2E',
  primaryBackground: '#fff',
  primaryHover: '#fe3b1f',
  textDark: '#111111',
  textLight: '#ffffff',
  secondary: '#788491',
};

// const primaryDark = '#fff';
const darkTheme = {
  ...lightTheme,
  // primary: lighten(0.05, primaryDark),
  // primaryBackground: primaryDark,
  // primaryHover: '#EAC48D',
  // textDark: lighten(0.5, primaryDark),
  // textLight: lighten(0.7, primaryDark),
  // secondary: lighten(0.04, primaryDark),
};

export { lightTheme, darkTheme, device, size };

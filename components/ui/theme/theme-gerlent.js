// Variants
import Font from '../Font/Font.variants';
import { createMediaQueries } from '../media';

const color = {
  white: '#FFF',
  primaryLighter: '#32b9d2',
  primary: '#32B9D2',
  primaryDarker: '#29235C',
  secondary: '#E5ECEC',
};

// font sizes.

/* eslint-disable no-unused-vars */
const fontSize1 = '0.667rem';
const fontSize2 = '1rem';
const fontSize3 = '1.5rem';
const fontSize4 = '2.25rem';
const fontSize5 = '3.375rem';
const fontSize6 = '5.063rem';
const fontSize7 = '7.594rem';
const fontSize8 = '11.391rem';
const fontSize9 = '17.086rem';
/* eslint-enable no-unused-vars */

// border
const borderRadius = 2;

// headline

const headline = {
  fontFamily: 'Cabin',
  fontWeight: 'bold',
  margin: 0,
};

// Text

const text = {
  fontFamily: 'Cabin',
  fontSize: fontSize2,
  fontWeight: 'bold',
  lineHeight: '1.5rem',
};

const button = {
  cursor: 'pointer',
  boxSizing: 'content-box',
  fontFamily: 'Cabin',
  fontSize: fontSize1,
  border: 0,
  borderRadius,
  minWidth: '8rem',
  minHeight: '2.5rem',
  '&:hover': {
    borderColor: '#3f51b5',
  },
};

// breakpoints and media queries generated
const breakpoints = [{ xs: 0 }, { sm: 600 }, { md: 960 }, { lg: 1280 }, { xl: 1920 }];
const mq = breakpoints
  .map(e => {
    const k = Object.keys(e)[0];
    return { [k]: `@media (min-width: ${e[k]}px)` };
  })
  .reduce((acc, o) => ({ ...acc, ...o }));

const emotionTheme = {
  Font,
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  typography: {
    fontFamily: ['Cabin', 'Raleway', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
  },
  texts: {
    textPrimaryDarker: {
      ...text,
      color: color.primaryDarker,
    },
    textPrimary: {
      ...text,
      color: color.primary,
    },
    textWhite: {
      ...text,
      color: color.white,
    },
    menu: {
      fontFamily: 'Raleway',
      fontSize: fontSize2,
      color: color.primaryDarker,
    },
    bigPrimary: {
      fontFamily: 'Cabin',
      fontSize: fontSize3,
      color: color.primary,
    },
    bigPrimaryDarker: {
      fontFamily: 'Raleway',
      fontSize: fontSize3,
      fontWeight: 'bold',
    },
  },
  titles: {
    hero: {
      fontFamily: 'Cabin',
      fontWeight: 'bold',
      color: color.primaryDarker,
      fontSize: fontSize5,
      textAlign: 'left',
      backgroundColor: 'transparent',
      [mq.md]: {
        color: color.white,
        fontSize: fontSize5,
        backgroundColor: color.primaryDarker,
        textAlign: 'center',
      },
    },
    headlinePrimaryDarker: {
      ...headline,
      color: color.primaryDarker,
    },
    headlinePrimary: {
      ...headline,
      color: color.primary,
    },
    headlineWhite: {
      ...headline,
      color: color.white,
    },
    headlineSecondary: {
      ...headline,
      color: color.secondary,
    },
    sidebarOptions: {
      ...headline,
      color: color.white,
    },
    faq: {
      fontFamily: 'Raleway',
      fontWeight: 'bold',
      fontSize: fontSize2,
      color: color.primary,
    },
  },
  buttons: {
    white: {
      ...button,
      color: color.primaryDarker,
      backgroundColor: color.white,
    },
    primaryDarker: {
      ...button,
      color: color.white,
      backgroundColor: color.primaryDarker,
    },
    primary: {
      ...button,
      color: color.white,
      backgroundColor: color.primary,
    },
    bigPrimaryDarker: {
      ...button,
      color: color.white,
      backgroundColor: color.primaryDarker,
      [mq.md]: {
        paddingTop: '0.667rem',
        paddingBottom: '0.667rem',
        paddingRight: '2.25rem',
        paddingLeft: '2.25rem',
      },
    },
    bigPrimary: {
      ...button,
      color: color.white,
      backgroundColor: color.primary,
      [mq.md]: {
        paddingTop: '0.667rem',
        paddingBottom: '0.667rem',
        paddingRight: '2.25rem',
        paddingLeft: '2.25rem',
      },
    },
    bigWhite: {
      ...button,
      color: color.primaryDarker,
      backgroundColor: color.white,
      [mq.md]: {
        paddingTop: '0.667rem',
        paddingBottom: '0.667rem',
        paddingRight: '2.25rem',
        paddingLeft: '2.25rem',
      },
    },
  },
  colors: { ...color },
  breakpoints: {
    xs: breakpoints[0].xs,
    sm: breakpoints[1].sm,
    md: breakpoints[2].md,
    lg: breakpoints[3].lg,
    xl: breakpoints[4].xl,
  },
  mediaQueries: createMediaQueries(),
  zIndex: {
    mobileStepper: 1000,
    appBar: 1100,
    drawer: 1200,
    burger: 1300,
    modal: 1400,
    snackbar: 1500,
    tooltip: 1600,
  },
  shape: {
    borderRadius,
  },
  // https://www.modularscale.com/?1&rem&1.5
  space: [
    '0.667rem',
    '1rem',
    '1.5rem',
    '2.25rem',
    '3.375rem',
    '5.063rem',
    '7.594rem',
    '11.391rem',
    '17.086rem',
  ],
  fontSizes: [
    fontSize1,
    fontSize2,
    fontSize3,
    fontSize4,
    fontSize5,
    fontSize6,
    fontSize7,
    fontSize8,
    fontSize9,
  ],
  mq: { ...mq },
};

export default emotionTheme;

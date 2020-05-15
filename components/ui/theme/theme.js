// Variants
import Button from '../Button/Button.variants';
import Checkbox from '../Checkbox/Checkbox.variants';
import ValidationError from '../ValidationError/ValidationError.variants';
import { fontSizes, fontVariants, FONT_KEY } from '../Font';

import colors from './colors';
import { createMediaQueries } from '../media';

// breakpoints and media queries generated
const breakpoints = [{ xs: 0 }, { sm: 600 }, { md: 960 }, { lg: 1280 }, { xl: 1920 }];
const mq = breakpoints
  .map(e => {
    const k = Object.keys(e)[0];
    return { [k]: `@media (min-width: ${e[k]}px)` };
  })
  .reduce((acc, o) => ({ ...acc, ...o }));

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
  fontSize: fontSizes.fontSize2,
  fontWeight: 'bold',
  lineHeight: '1.5rem',
};

const button = {
  cursor: 'pointer',
  boxSizing: 'content-box',
  fontFamily: 'Cabin',
  fontSize: fontSizes.fontSize2,
  border: 0,
  borderRadius,
  minWidth: '8rem',
  minHeight: '2.5rem',
  transition: 'color 0.2s, background-color 0.2s',
};

const bigButton = {
  ...button,
  [mq.xs]: {
    paddingTop: '0.667rem',
    paddingBottom: '0.667rem',
    paddingRight: '1rem',
    paddingLeft: '1rem',
  },
  [mq.md]: {
    paddingTop: '0.667rem',
    paddingBottom: '0.667rem',
    paddingRight: '2.25rem',
    paddingLeft: '2.25rem',
  },
};

const emotionTheme = {
  Button,
  Checkbox,
  [FONT_KEY]: fontVariants,
  ValidationError,
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
  /* @deprecated texts
  key is deprecated in favour of `Font.variants` 
  */
  texts: {
    textPrimaryDarker: {
      ...text,
      color: colors.primaryDarker,
    },
    textPrimary: {
      ...text,
      color: colors.primary,
    },
    textWhite: {
      ...text,
      color: colors.white,
    },
    menu: {
      fontFamily: 'Raleway',
      fontSize: fontSizes.fontSize2,
      color: colors.primaryDarker,
    },
    bigPrimary: {
      fontFamily: 'Cabin',
      fontSize: fontSizes.fontSize3,
      color: colors.primary,
    },
    bigPrimaryDarker: {
      fontFamily: 'Raleway',
      fontSize: fontSizes.fontSize3,
      fontWeight: 'bold',
    },
  },
  /* @deprecated titles
  key is deprecated in favour of `Font.variants` 
  */
  titles: {
    hero: {
      fontFamily: 'Cabin',
      fontWeight: 'bold',
      color: colors.primaryDarker,
      fontSize: fontSizes.fontSize5,
      textAlign: 'left',
      backgroundColor: 'transparent',
      [mq.md]: {
        color: colors.white,
        fontSize: fontSizes.fontSize5,
        backgroundColor: colors.primaryDarker,
        textAlign: 'center',
      },
    },
    headlinePrimaryDarker: {
      ...headline,
      color: colors.primaryDarker,
    },
    headlinePrimary: {
      ...headline,
      color: colors.primary,
    },
    headlineWhite: {
      ...headline,
      color: colors.white,
    },
    headlineSecondary: {
      ...headline,
      color: colors.secondary,
    },
    sidebarOptions: {
      ...headline,
      color: colors.white,
      textTransform: 'uppercase',
    },
    faq: {
      fontFamily: 'Raleway',
      fontWeight: 'bold',
      fontSize: fontSizes.fontSize2,
      color: colors.primary,
    },
  },
  // @deprecated use Buttons.variants
  buttons: {
    white: {
      ...button,
      color: colors.primaryDarker,
      backgroundColor: colors.white,
      '&:hover': {
        color: colors.white,
        backgroundColor: colors.primaryDarker,
      },
      textTransform: 'uppercase',
    },
    primaryDarker: {
      ...button,
      color: colors.white,
      backgroundColor: colors.primaryDarker,
    },
    primary: {
      ...button,
      color: colors.white,
      backgroundColor: colors.primary,
      textTransform: 'uppercase',
    },
    bigPrimaryDarker: {
      ...bigButton,
      color: colors.white,
      backgroundColor: colors.primaryDarker,
      '&:hover': {
        color: colors.primaryDarker,
        backgroundColor: colors.white,
      },
    },
    bigPrimary: {
      ...bigButton,
      color: colors.white,
      backgroundColor: colors.primary,
      '&:hover': {
        color: colors.primary,
        backgroundColor: colors.white,
      },
    },
    bigWhite: {
      ...bigButton,
      color: colors.primaryDarker,
      backgroundColor: colors.white,
      '&:hover': {
        color: colors.white,
        backgroundColor: colors.primaryDarker,
      },
    },
  },
  colors: { ...colors },
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
  fontSizes: Object.values(fontSizes),
  mq: { ...mq },
  links: {
    menu: {
      color: colors.primaryDarker,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
};

export default emotionTheme;

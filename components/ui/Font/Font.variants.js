import colors from 'ui/theme/colors';
import fontSizes from './Font.sizes';

const caption = {
  textDecoration: 'none',
  lineHeight: '32px',
  letterSpacing: '0.02em',
  textTransform: 'uppercase',
};

const Hero = {
  fontFamily: 'Cabin',
  fontWeight: 'bold',
  fontSize: fontSizes.fontSize5,
  color: colors.white,
  backgroundColor: 'transparent',
};
const headline = {
  fontFamily: 'Cabin',
  fontWeight: 'bold',
  margin: 0,
};

const caption24 = {
  ...caption,
  lineHeight: '24px',
};

const baselineCaption = {
  ...caption,
  margin: 0,
};

const h2 = {
  fontSize: '40px',
  lineHeight: '40px',
};

const textPrimaryDarker = {
  color: colors.primaryDarker,
};

const textPrimary = {
  color: colors.primary,
};

const textWhite = {
  color: colors.white,
};

const menu = {
  fontFamily: 'Raleway',
  fontSize: fontSizes.fontSize2,
  color: colors.primaryDarker,
};

const bigPrimary = {
  fontFamily: 'Cabin',
  fontSize: fontSizes.fontSize3,
};

const bigPrimaryDarker = {
  fontFamily: 'Raleway',
  fontSize: fontSizes.fontSize3,
  color: colors.primaryDarker,
  fontWeight: 'bold',
};

// defaults values can always being overriden by props
const headlinePrimary = {
  ...headline,
  color: colors.primary,
  fontSize: fontSizes.fontSize5,
};

const headlineSecondary = {
  ...headline,
  color: colors.primary, // defaults color can always being overriden by props
  fontSize: fontSizes.fontSize4,
};

export default {
  textPrimaryDarker,
  textPrimary,
  textWhite,
  bigPrimary,
  bigPrimaryDarker,
  baselineCaption,
  caption,
  caption24,
  headlinePrimary,
  headlineSecondary,
  menu,
  h2,
  Hero,
};

import getConfig from 'next/config';

export const COLORS_KEY = 'colors';
const { publicRuntimeConfig } = getConfig();

const color = {
  warning: '#CD4AC5',
  white: '#FFF',
  primary: publicRuntimeConfig.primaryColor,
  primaryDarker: publicRuntimeConfig.primaryColorDarker,
  secondary: publicRuntimeConfig.secondary,
  lightGrey: '#E5ECEC',
  logo: '#29235c',
};

export default color;

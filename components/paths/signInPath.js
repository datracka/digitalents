import getConfig from 'next/config';

export default () => {
  const { publicRuntimeConfig } = getConfig();
  return `//${publicRuntimeConfig.classicDomain}/users/sign_in`;
};

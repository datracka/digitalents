import getConfig from 'next/config';

const getLanguageFromHost = host => {
  const { publicRuntimeConfig } = getConfig();
  const [hostLanguage] = host.split('.');
  return publicRuntimeConfig.acceptedLanguages.split(',').includes(hostLanguage)
    ? hostLanguage
    : publicRuntimeConfig.defaultLanguage;
};

const getAcceptedLanguages = () => {
  const { publicRuntimeConfig } = getConfig();
  return publicRuntimeConfig.acceptedLanguages.split(',');
};

export { getLanguageFromHost, getAcceptedLanguages };

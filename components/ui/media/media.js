const createMediaCss = (css, mediaQueries) =>
  Object.keys(css).reduce((acc, currentKey) => {
    const query = mediaQueries[currentKey];
    const key = query ? `@media ${query}` : currentKey;
    return { ...acc, [key]: css[currentKey] };
  }, {});

export default css => ({ mediaQueries, theme }) =>
  createMediaCss(css, mediaQueries || theme.mediaQueries);

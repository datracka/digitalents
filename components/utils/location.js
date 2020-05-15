const getDomain = () => (typeof window !== 'undefined' ? window.location.hostname : '');
const getPort = () => (typeof window !== 'undefined' ? window.location.port : '');
const getCompleteDomainAsText = () => `//${getDomain()}:${getPort()}`;
export { getDomain, getPort, getCompleteDomainAsText };

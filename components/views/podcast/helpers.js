import { SITE_GLOLENT, SITE_GERLENT } from 'layouts/constants';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const buildSpotifyLink = () => {
  switch (publicRuntimeConfig.site) {
    case SITE_GLOLENT:
      return 'https://open.spotify.com/show/30OtJo9OZv5TmWQ1z3cSGv?si=1W7lXb0zRSGV68SCThsOwg';
    case SITE_GERLENT:
      return 'https://open.spotify.com/show/0LP6yNe3he9xPAZ4yWtbGW';
    default:
      return 'https://open.spotify.com/show/30OtJo9OZv5TmWQ1z3cSGv?si=1W7lXb0zRSGV68SCThsOwg';
  }
};

export const buildAndroidLink = () => {
  switch (publicRuntimeConfig.site) {
    case SITE_GLOLENT:
      return 'http://subscribeonandroid.com/glolent.libsyn.com/rss';
    case SITE_GERLENT:
      return '';
    default:
      return 'http://subscribeonandroid.com/gerlent.libsyn.com/rss';
  }
};

export const buildAppleLink = () => {
  switch (publicRuntimeConfig.site) {
    case SITE_GLOLENT:
      return 'https://podcasts.apple.com/de/podcast/glolent-podcast-freelancing-and-remote-work-in-practice/id1465285071';
    case SITE_GERLENT:
      return 'https://podcasts.apple.com/us/podcast/gerlent-podcast-freelancing-und-remote-arbeit-in-der/id1445329065';
    default:
      return 'https://podcasts.apple.com/de/podcast/glolent-podcast-freelancing-and-remote-work-in-practice/id1465285071';
  }
};

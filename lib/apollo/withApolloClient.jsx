import React from 'react';
import Head from 'next/head';
import get from 'lodash/get';
import initApollo from './initApollo';

export default WrappedApp => {
  return class Apollo extends React.Component {
    static displayName = 'withApollo(App)';

    static async getInitialProps(req) {
      const { ctx, AppTree } = req;
      const { statusCode = 500 } = { ...ctx.err, ...ctx.res };
      const host = get(req, 'ctx.req.headers.host');

      const appProps = WrappedApp.getInitialProps ? await WrappedApp.getInitialProps(req) : {};

      const apolloClient = initApollo({ host, statusCode });
      if (!process.browser) {
        try {
          const { getDataFromTree } = await import('@apollo/react-ssr');
          await getDataFromTree(<AppTree apolloClient={apolloClient} pageProps={appProps} />);
        } catch (fetchError) {
          req.ctx.res.statusCode = get(fetchError, 'networkError.statusCode', 500);
        }
        Head.rewind();
      }

      const apolloState = apolloClient.cache.extract();

      return {
        ...appProps,
        apolloState,
      };
    }

    constructor(props) {
      super(props);
      this.apolloClient = initApollo(props.apolloState);
    }

    render() {
      return <WrappedApp apolloClient={this.apolloClient} {...this.props} />;
    }
  };
};

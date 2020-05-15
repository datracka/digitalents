/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component } from 'react';
import PropTypes from 'prop-types';

import createMediaQueries from './createMediaQueries';
import match from './match';

const mediaQueries = createMediaQueries();

const mediaToString = mediaArray => mediaArray.join(', ');

class Visible extends Component {
  isMounted = false;

  componentDidMount() {
    this.isMounted = true;
    this.forceUpdate();
    window.addEventListener('resize', this.handleResize, { passive: true });
  }

  // eslint-disable-next-line
  componentWillUnMount() {
    this.isMounted = false;
    window.removeEventListener('resize', this.handleResize);
  }

  get clientQueries() {
    const { children, element, ...queryNames } = this.props;
    return Object.keys(queryNames).map(name => mediaQueries[name]);
  }

  get serverQueries() {
    return this.clientQueries.map(query => `not ${query}`);
  }

  get clientContent() {
    const mq = mediaToString(this.clientQueries);
    const { children } = this.props;
    return match(mq) ? children : null;
  }

  get serverContent() {
    const { children, element: Element } = this.props;
    const key = `@media ${mediaToString(this.serverQueries)}`;
    return <Element css={{ [key]: { display: 'none' } }}>{children}</Element>;
  }

  handleResize = () => {
    if (this.isMounted) this.forceUpdate();
  };

  render() {
    return this.isMounted ? this.clientContent : this.serverContent;
  }
}

Visible.propTypes = {
  element: PropTypes.string,
  children: PropTypes.node.isRequired,
};
Visible.defaultProps = {
  element: 'div',
};

export default Visible;

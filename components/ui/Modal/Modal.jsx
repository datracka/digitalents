/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import styled from '@emotion/styled';

import getBodyNode from './getBodyNode';
import Overlay from './Overlay';
import stopPropagation from '../../utils/stopPropagation';

const Box = styled.div(({ scroll }) => {
  return css`
    max-height: 100vh;
    overflow: ${scroll ? 'scroll' : 'hidden'};
    overflow-scrolling: 'touch';
    --webkit-overflow-scrolling: 'touch';
    scroll-behavior: 'smooth';
    > * {
      transform: translate3d(0, 0, 0);
    }
  `;
});

export default class Modal extends Component {
  componentWillUnmount() {
    this.unregister();
  }

  unregister = () => this.props.onModalLeave();

  toggle() {
    const { isVisible, onModalEnter, onModalLeave } = this.props;
    if (!isVisible) onModalEnter();
    else onModalLeave();
  }

  render() {
    const { isVisible, children, scroll } = this.props;
    const bodyNode = getBodyNode();
    if (bodyNode && isVisible) {
      return createPortal(
        <Overlay onCloseEnd={this.unregister}>
          <Box onAnimationEnd={stopPropagation} onClick={stopPropagation} scroll={scroll}>
            {children}
          </Box>
        </Overlay>,
        bodyNode,
      );
    }
    return null;
  }
}

Modal.defaultProps = {
  scroll: true,
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool.isRequired,
  scroll: PropTypes.bool,
  onModalEnter: PropTypes.func.isRequired,
  onModalLeave: PropTypes.func.isRequired,
};

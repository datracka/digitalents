/** @jsx jsx */
import { Fragment, useState } from 'react';
import useKey from 'react-use/lib/useKey';
import PropTypes from 'prop-types';
import { css, Global, jsx, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { variant } from 'styled-system';

import getBodyNode from './getBodyNode';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  to { opacity: 0; }
`;

const popIn = keyframes`
  from { opacity: 0; transform: translateY(80px); }
  to { opacity: 1;; transform: translateY(0); }
`;
const popOut = keyframes`
  to { opacity: 0; transform: translateY(80px); }
`;

const transparent = variant({
  opacity: 0,
});

const Shell = styled.div`
  ${transparent}
  ${({ theme }) => ({
    zIndex: theme.zIndex.modal,
  })}
  align-items: center;
  background: rgba(27, 23, 61, 0.8);
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  will-change: opacity;
  > * {
    will-change: opacity, transform;
  }
`;

const Overlay = ({ noClose, onCloseBegin, onCloseEnd, ...rest }) => {
  const [isComplete, setIsComplete] = useState(false);
  const handleAnimation = () => {
    if (isComplete) onCloseEnd();
  };
  const handleClick = () => {
    setIsComplete(!noClose);
    onCloseBegin();
  };
  const animation = css`
    animation: ${isComplete ? fadeOut : fadeIn} ${isComplete ? '0.32s' : '0.88s'} ease forwards;
    pointer-events: ${isComplete ? 'none' : 'auto'};
    > * {
      animation: ${isComplete ? popOut : popIn} 0.32s ease forwards;
    }
  `;
  useKey('Escape', handleClick);
  const bodyNode = getBodyNode();

  return (
    bodyNode && (
      <Fragment>
        <Global
          styles={{
            body: {
              overflow: 'hidden',
              overscrollBehavior: 'none',
            },
          }}
        />
        <Shell {...rest} css={animation} onAnimationEnd={handleAnimation} onClick={handleClick} />
      </Fragment>
    )
  );
};

Overlay.propTypes = {
  noClose: PropTypes.bool,
  onCloseBegin: PropTypes.func,
  onCloseEnd: PropTypes.func,
};
Overlay.defaultProps = {
  noClose: false,
  onCloseBegin() {},
  onCloseEnd() {},
};

export default Overlay;

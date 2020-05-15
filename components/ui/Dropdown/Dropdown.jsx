/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from '@emotion/styled';

import PropTypes from 'prop-types';
import useClickAway from 'react-use/lib/useClickAway';

import getBodyNode from './getBodyNode';
import getCss from './getCss';
import usePositionBinding from './usePositionBinding';

import {
  DROPDOWN_STATE_DISABLED,
  DROPDOWN_STATE_ENTERING,
  DROPDOWN_STATE_READY,
  DROPDOWN_STATE_EXITING,
  DROPDOWN_PALCEMENT_BL,
} from './constants';

const knownStates = [
  DROPDOWN_STATE_DISABLED,
  DROPDOWN_STATE_ENTERING,
  DROPDOWN_STATE_READY,
  DROPDOWN_STATE_EXITING,
];

const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 3px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
  z-index: ${({ theme }) => theme.zIndex.tooltip};
`;

const Dropdown = ({
  bindTo,
  children,
  onExit,
  onBeginExit,
  onReadyState,
  placement,
  state,
  ...rest
}) => {
  if (state === DROPDOWN_STATE_DISABLED) return null;
  const bodyNode = getBodyNode();
  const dropdownRef = useRef(null);
  const dynamicCss = usePositionBinding(bindTo, placement);

  function handleAnimationEnd() {
    if (state === DROPDOWN_STATE_EXITING) onExit();
    else onReadyState();
  }
  useClickAway(dropdownRef, onBeginExit, ['click']);
  const output = (
    <Box
      {...rest}
      ref={dropdownRef}
      css={{ ...getCss(state), ...dynamicCss }}
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </Box>
  );
  return createPortal(output, bodyNode);
};

Dropdown.propTypes = {
  bindTo: PropTypes.shape().isRequired,
  children: PropTypes.node.isRequired,
  onBeginExit: PropTypes.func,
  onExit: PropTypes.func,
  onReadyState: PropTypes.func,
  placement: PropTypes.string,
  state: PropTypes.oneOf(knownStates),
};
Dropdown.defaultProps = {
  placement: DROPDOWN_PALCEMENT_BL,
  state: DROPDOWN_STATE_DISABLED,
};

export default Dropdown;

/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

const getMeasurments = (size, width, height) => {
  if (size)
    return {
      width: size,
      height: size,
    };
  return { width, height };
};

const Svg = ({ blockLevel, children, color, size, width, height, ...rest }) => (
  <svg
    {...rest}
    css={({ colors }) => ({
      ...getMeasurments(size, width, height),
      display: blockLevel ? 'block' : 'inline-block',
      fill: color ? `${colors[color] || color}` : 'currentColor',
    })}
  >
    {children}
  </svg>
);

const UNIT = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

Svg.propTypes = {
  blockLevel: PropTypes.bool,
  children: PropTypes.node.isRequired,
  color: PropTypes.node,
  size: PropTypes.number,
  height: UNIT,
  width: UNIT,
};
Svg.defaultProps = {
  blockLevel: false,
  color: null,
  size: null,
  height: null,
  width: null,
};

export default Svg;

/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';

import Box from './input.css';

const emitEvent = (event, handler) => {
  if (typeof handler === 'function') handler(event);
};

const Input = forwardRef(
  (
    {
      color,
      defaultValue,
      fancy,
      Element = 'input',
      label,
      onBlur,
      onChange,
      onFocus,
      value,
      ...rest
    },
    ref,
  ) => {
    const isControlled = typeof value !== 'undefined' && value !== null;
    const defaultValueNotNull = defaultValue === null ? undefined : defaultValue;
    const [ownValue, setOwnValue] = useState(isControlled ? value : defaultValueNotNull);
    const [hasFocus, setHasFocus] = useState(false);

    const currentValue = isControlled ? value : ownValue;
    const active = hasFocus || !!currentValue || currentValue === 0;

    const handleBlur = event => {
      setHasFocus(false);
      emitEvent(event, onBlur);
    };
    const handleChange = event => {
      setOwnValue(event.currentTarget.value);
      emitEvent(event, onChange);
    };
    const handleFocus = event => {
      setHasFocus(true);
      emitEvent(event, onFocus);
    };

    return (
      <Box fancy={fancy} color={color}>
        {!!label && <span className={active ? 'active' : ''}>{label}</span>}
        <Element
          type="text"
          {...rest}
          ref={ref}
          className={`input ${rest.className}`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          value={currentValue}
        />
      </Box>
    );
  },
);

Input.propTypes = {
  fancy: PropTypes.bool,
  label: PropTypes.node,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
};

Input.defaultProps = {
  fancy: false,
  label: null,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
};

export default Input;

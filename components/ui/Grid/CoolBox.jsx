import React from 'react';
import styled from '@emotion/styled';
import { layout, core, position, typography } from 'utils';

const CoolBox = React.forwardRef(({ children, className, onClick }, ref) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div className={className} ref={ref} onClick={onClick} onKeyDown={onClick}>
    {children}
  </div>
));

export default styled(CoolBox)`
  ${position}
  ${layout}
  ${core}
  ${typography}
  box-sizing: border-box;
`;

CoolBox.defaultProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
};

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { forwardRef } from 'react';
import useVariant from 'ui/theme/useVariant';

export const FONT_KEY = 'Font';

const Font = forwardRef(({ element: Element = 'span', children, color, variant, ...rest }, ref) => {
  const variantStyle = useVariant({ key: FONT_KEY, variant });
  return (
    <Element
      ref={ref}
      css={({ colors }) => css`
        font-family: Cabin, Raleway, Roboto, 'Helvetica Neue', Arial, sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: ${colors[color] || 'white'};
        ${variantStyle}
      `}
      {...rest}
    >
      {children}
    </Element>
  );
});

Font.defaultProps = {
  variant: 'menu',
};

export default Font;

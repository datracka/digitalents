import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { core, typography, layout, misc, variant, compose } from 'utils';

const textStyle = variant({
  key: 'texts',
});

const titleStyle = variant({
  key: 'titles',
});

const buttonStyle = variant({
  key: 'buttons',
});

const Title = styled.h1`
  ${misc}
  ${titleStyle}
  ${core}
  ${typography}
`;

const textBase = compose(
  () => css`
    padding: 0;
    margin: 0;
  `,
  textStyle,
  core,
  typography,
);

const Link = styled('a')`
  ${textBase}
  display: inline-block
`;

const Text = styled('p')`
  ${textBase}
`;

const Button = styled.button`
  ${buttonStyle}
  ${layout}
  ${core}
  ${() => css`
    text-transform: uppercase;
    max-height: 60px;
  `}
`;

Link.defaultProps = {
  variant: 'menu',
};

Title.defaultProps = {
  variant: 'headline',
};

Text.defaultProps = {
  variant: 'textPrimaryDarker',
};

Button.defaultProps = {
  variant: 'white',
};

export { Text, Title, Button, Link };

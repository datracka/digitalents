import { useState } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { CoolBox } from 'ui/Grid';
import { Text } from 'ui/variants';

export default ({ step, title, text, open }) => {
  const [isOpen, setIsOpen] = useState(open || false);
  const handleClick = () => setIsOpen(!isOpen);

  const defaultStyle = css`
    transition: all 0.3s ease-out;
    background-color: white;
    max-height: 100px;
    cursor: pointer;
  `;

  const transition = css`
    background-color: #29235c;
    overflow: hidden;
    max-height: 300px;
  `;

  const doAnimation = isOpen ? transition : null;
  return (
    <CoolBox
      p={1}
      my={2}
      display={{ xs: 'block' }}
      textAlign={{ xs: 'left', md: 'right' }}
      onClick={handleClick}
      css={[defaultStyle, doAnimation]}
    >
      <Text variant="textPrimary">{`Step ${step}`}</Text>
      <Text variant={isOpen ? 'textWhite' : 'textPrimaryDarker'}>{title}</Text>
      {isOpen ? (
        <CoolBox mt={1}>
          <Text variant={isOpen ? 'textPrimary' : 'textPrimaryDarker'} textAlign="left" mr="-4px">
            {text}
          </Text>
        </CoolBox>
      ) : null}
    </CoolBox>
  );
};

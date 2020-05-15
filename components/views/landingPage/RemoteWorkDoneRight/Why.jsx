/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { CoolBox } from 'ui/Grid';
import { Text } from 'ui/variants';
import Img from 'ui/Img';
import Observer from 'animations/Observer';

export default ({ text, animationDelay }) => {
  const defaultStyles = css`
    transition: opacity 0.7s ease ${animationDelay};
    opacity: 0;
  `;
  const animation = css`
    opacity: 1;
  `;
  return (
    <Observer>
      {(handleRef, inView) => {
        const doAnimation = inView ? animation : null;
        return (
          <CoolBox mt={2} ref={handleRef} css={[defaultStyles, doAnimation]} display="flex">
            <Img
              src="/static/images/checked_small.svg"
              alt="Remote Work Done"
              width={{ xs: '2rem' }}
              verticalAlign="top"
            />
            <Text variant="textWhite" ml={{ xd: 2 }}>
              {text}
            </Text>
          </CoolBox>
        );
      }}
    </Observer>
  );
};

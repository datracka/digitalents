/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Img from 'ui/Img';
import Observer from 'animations/Observer';

export default ({ img, width, top, left, animationDelay }) => {
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
          <Img
            ref={handleRef}
            css={[defaultStyles, doAnimation]}
            src={`/static/images/${img}.svg`}
            alt={img}
            width={width}
            top={top}
            left={left}
            position="absolute"
          />
        );
      }}
    </Observer>
  );
};

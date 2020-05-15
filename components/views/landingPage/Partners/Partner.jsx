/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Observer from 'animations/Observer';
import Img from 'ui/Img';

export default ({ link, image, animationDelay }) => {
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
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Img
              src={`/static/images/${image}`}
              alt={image}
              p={3}
              width={{ xs: '6rem' }}
              ref={handleRef}
              css={[defaultStyles, doAnimation]}
            />
          </a>
        );
      }}
    </Observer>
  );
};

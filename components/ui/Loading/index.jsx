/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';

const animation = keyframes`
    0% {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
  }
  `;

export default () => {
  return (
    <div
      css={css`
        opacity: 1;
        position: absolute;
        transition: opacity linear 0.1s;
        left: 50%;
        &::before {
          animation: 2s linear infinite ${animation};
          border: solid 3px #eee;
          border-bottom-color: #ef6565;
          border-radius: 50%;
          content: '';
          height: 40px;
          left: 50%;
          opacity: inherit;
          position: absolute;
          top: 50%;
          transform: translate3d(-50%, -50%, 0);
          transform-origin: center;
          width: 40px;
          will-change: transform;
        }
      `}
    />
  );
};

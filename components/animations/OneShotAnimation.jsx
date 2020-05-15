import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

export const FADE_IN = 'fadeIn';
export const TRANSFORM_LEFT = 'transformLeft';
export const TRANSFORM_RIGHT = 'transformRight';
export const TRANSFORM_BOTTOM = 'transformBottom';
export const TRANSFORM_SCALEUP = 'transformScaleUp';

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const transformScaleUp = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
`;

const transformLeft = keyframes`
    0% {
      opacity: 0;
      transform: translate(-100px, 0);
    }
    50% {
    opacity: 0;
  }
    100%{
      opacity: 1;
      transform(0)
    }
`;

const transformBottom = keyframes`
    0% {
      opacity: 0;
      transform: translate(0, 50px);
    }
    50% {
    opacity: 0;
    } 
    100%{
      opacity: 1;
      transform(0)
    }
`;

const transformRight = keyframes`
  0% {
      opacity: 0;
      transform: translate(100px, 0);
  }
  50% {
    opacity: 0;
  }
  100%{
    opacity: 1;
    transform(0)
  }`;

const OneShotAnimation = ({ children, className }) => {
  return children(className);
};

export default styled(OneShotAnimation)(
  ({ type, delay, duration, timingFunction, iterationCount }) => {
    const selectAnimation = t =>
      ({
        [FADE_IN]: fadeIn,
        [TRANSFORM_LEFT]: transformLeft,
        [TRANSFORM_RIGHT]: transformRight,
        [TRANSFORM_BOTTOM]: transformBottom,
        [TRANSFORM_SCALEUP]: transformScaleUp,
      }[t] || fadeIn);

    return {
      animation: `${selectAnimation(type)} ${duration || '1s'} ${timingFunction ||
        'ease'} ${delay || 0} ${iterationCount || 1}`,
    };
  },
);

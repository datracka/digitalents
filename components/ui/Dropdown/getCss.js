import { keyframes } from '@emotion/core';
import { DROPDOWN_STATE_ENTERING, DROPDOWN_STATE_EXITING } from './constants';
import pipe from '../../utils/pipe';

const popIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(48px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const popOut = keyframes`
  to {
    opacity: 0;
    transform: translateY(48px);
  }
`;

function getAnimationCss(state) {
  if (state === DROPDOWN_STATE_ENTERING) {
    return {
      animation: `${popIn} 0.4s ease forwards`,
    };
  }
  if (state === DROPDOWN_STATE_EXITING) {
    return {
      animation: `${popOut} 0.24s ease forwards`,
    };
  }
  return {};
}

function getStaticCss(animationCss, relative) {
  if (relative) return null;
  return {
    ...animationCss,
    overflow: 'hidden',
    position: 'fixed',
    willChange: 'opacity, transform',
  };
}

export default pipe(getAnimationCss, getStaticCss);

import { useState } from 'react';
import useInterval from 'react-useinterval';
import difference from 'lodash/difference';
import values from 'lodash/values';

import { DROPDOWN_PALCEMENT_BL } from './constants';

function getDropDownCss(bindTo, placement) {
  if (!bindTo.current) return null;
  const rect = bindTo.current.getBoundingClientRect();
  const top = rect.height + rect.top + 2;
  switch (placement) {
    case DROPDOWN_PALCEMENT_BL:
      return {
        left: rect.left,
        top,
      };
    default:
      return {
        right: window.innerWidth - (rect.left + rect.width),
        top,
      };
  }
}

export default (bindTo, placement) => {
  const defaultState = getDropDownCss(bindTo, placement);
  const [state, replaceState] = useState(defaultState);
  function observeChanges() {
    const nextState = getDropDownCss(bindTo, placement);
    const diff = difference(values(state), values(nextState));
    if (diff.length) replaceState(nextState);
  }
  useInterval(observeChanges, 32);
  return state;
};

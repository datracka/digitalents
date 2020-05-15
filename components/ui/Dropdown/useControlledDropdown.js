import { useState } from 'react';
import useKey from 'react-use/lib/useKey';

import {
  DROPDOWN_STATE_DISABLED,
  DROPDOWN_STATE_ENTERING,
  DROPDOWN_STATE_EXITING,
  DROPDOWN_STATE_READY,
} from './constants';

export default (defaultState = DROPDOWN_STATE_DISABLED) => {
  const [state, setState] = useState(defaultState);

  const isActive = [DROPDOWN_STATE_ENTERING, DROPDOWN_STATE_READY].includes(state);
  // const isDisabled = state === DROPDOWN_STATE_DISABLED;

  function setIsActive(nextIsActive) {
    if (nextIsActive) setState(DROPDOWN_STATE_ENTERING);
    else setState(DROPDOWN_STATE_EXITING);
  }

  function toggle() {
    setIsActive(!isActive);
  }
  function onBeginExit() {
    if (isActive) setState(DROPDOWN_STATE_EXITING);
  }
  function onExit() {
    setState(DROPDOWN_STATE_DISABLED);
  }
  function onReadyState() {
    setState(DROPDOWN_STATE_READY);
  }

  useKey('Escape', onBeginExit, {}, [state]);

  return [
    { state, onBeginExit, onExit, onReadyState },
    { toggle, isActive, setIsActive },
  ];
};

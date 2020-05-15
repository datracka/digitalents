import { useRef } from 'react';
import useReactiveState from '../../hooks/useReactiveState';

export default ({ onModalLeave } = {}) => {
  const [state, setState] = useReactiveState({ modal: [] });
  const ref = useRef();
  const modalProps = {
    isVisible: state.modal.length > 0 && state.modal[0] === ref.current,
    onModalEnter() {
      const nextState = [ref.current, ...state.modal];
      setState('modal', nextState);
    },
    onModalLeave() {
      const nextState = state.modal.filter(item => item !== ref.current);
      setState('modal', nextState);
      if (onModalLeave) onModalLeave();
    },
    printStack() {
      return [...state.modal].reverse();
    },
    ref,
  };
  function toggle() {
    ref.current.toggle();
  }
  return [modalProps, toggle];
};

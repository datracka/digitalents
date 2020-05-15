import { useEffect, useState } from 'react';

const eventName = 'REACTIVE_STATE_UPDATE';
let store = {};

function replaceStore(nextStore) {
  store = nextStore;
  const event = document.createEvent('Event');
  event.initEvent(eventName, true, true);
  window.dispatchEvent(event);
}

export default (initialState = {}) => {
  const [, replaceLocalState] = useState();
  function setState(key, value) {
    replaceStore({ ...store, [key]: value });
  }
  function listener({ timeStamp }) {
    replaceLocalState(timeStamp);
  }
  useEffect(() => {
    window.addEventListener(eventName, listener);
    replaceStore({ ...initialState, ...store });
    return () => {
      window.removeEventListener(eventName, listener);
    };
  }, [0]);
  return [{ ...initialState, ...store }, setState];
};

import { useEffect, useState } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import throttle from 'lodash/throttle';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const HEADER_SCROLL = 250;

export default ({ children, landingPage, sticky }) => {
  const [wentThrought, setWentThrought] = useState(false);

  const style = ({ mq, space, zIndex: { appBar } }) => {
    return {
      backgroundColor: landingPage ? publicRuntimeConfig.primaryColor : 'white',
      zIndex: appBar,
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: sticky ? 'fixed' : 'relative',
      boxSizing: 'border-box',
      transition: 'padding 300ms ease, opacity 600ms',
      paddingLeft: space[2],
      paddingRight: space[2],
      paddingTop: wentThrought ? space[1] : space[2],
      paddingBottom: wentThrought ? space[1] : space[2],
      opacity: 1,
      [mq.md]: {
        paddingTop: wentThrought ? space[1] : space[3],
        paddingBottom: wentThrought ? space[1] : space[3],
        paddingLeft: space[4],
        paddingRight: space[4],
      },
    };
  };

  const checkIfWentThrough = throttle(() => {
    if (!sticky) return;
    if (Math.round(window.scrollY) > HEADER_SCROLL) {
      setWentThrought(true);
    } else {
      setWentThrought(false);
    }
  });

  useEffect(() => {
    window.addEventListener('scroll', checkIfWentThrough);
    return () => {
      window.removeEventListener('scroll', checkIfWentThrough);
    };
  });

  return <header css={style}>{children}</header>;
};

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import getConfig from 'next/config';
import media from 'ui/media';

const { publicRuntimeConfig } = getConfig();

const defaultStyles = ({ sticky }) => ({
  boxSizing: 'border-box',
  border: '0',
  padding: '0',
  background: 'none',
  width: '1.8rem',
  zIndex: '1300',
  position: sticky ? 'fixed' : 'absolute',
  top: '1.5rem',
  right: '1.5rem',
  'div, div:nth-of-type(2)::after': {
    height: '0.25rem',
    backgroundColor: '#fff',
    transition: 'transform 0.3s, opacity 0.2s',
  },
  'div:nth-of-type(2)::after': {
    content: '""',
    display: 'block',
    width: '100%',
  },
  'div + div': {
    marginTop: '0.3rem',
  },
});

const transition = css`
  div:nth-of-type(1) {
    opacity: 0;
    transform: translateX(-100%);
  }

  div:nth-of-type(3) {
    opacity: 0;
    transform: translateX(100%);
  }

  div:nth-of-type(2) {
    transform: rotate(45deg);
  }

  div:nth-of-type(2)::after {
    transform: rotate(-90deg);
  }
`;

const colorWhite = {
  backgroundColor: 'transparent',
  div: {
    backgroundColor: 'white',
  },
};

const colorPrimary = {
  backgroundColor: 'transparent',
  'div, div:nth-of-type(2)::after': {
    backgroundColor: publicRuntimeConfig.primaryColor,
  },
};

const Burger = ({ isOpen, onClick, className, landingPage, sticky }) => {
  const doAnimation = isOpen ? transition : null;
  const color = landingPage ? colorWhite : colorPrimary;
  return (
    <button
      className={className}
      css={[defaultStyles({ sticky }), color, doAnimation]}
      type="button"
      onClick={onClick}
    >
      <div />
      <div />
      <div />
    </button>
  );
};

export default styled(Burger)`
  &:focus {
    outline: 0;
  }
  ${media({
    phone: {
      display: 'block',
    },
    atMostLaptop: {
      display: 'none',
    },
  })}
`;

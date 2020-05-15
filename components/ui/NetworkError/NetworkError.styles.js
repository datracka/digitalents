import styled from '@emotion/styled';
import Font from 'ui/Font';
import { keyframes } from '@emotion/core';

const popIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const popOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(100%);
  }
`;

// eslint-disable-next-line import/prefer-default-export
export const Box = styled(Font)`
  animation: ${({ visible }) => (visible ? popIn : popOut)} 0.4s ease forwards;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 3px;
  position: fixed;
  right: 16px;
  bottom: 16px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.38);
  padding: 16px;
  will-change: opacity, transform;
  width: 400px;
  header {
    color: ${({ theme }) => theme.colors.warning};
    font-size: 70%;
  }
  article {
    margin-bottom: 16px;
  }
  nav {
    text-align: right;
  }
  @media ${({ theme }) => theme.mediaQueries.atLeastPhone} {
    left: 16px;
    width: auto;
  }
`;

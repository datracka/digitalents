import { display } from 'styled-system';
import styled from '@emotion/styled';

export default styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  ${display}
  .menuLink {
    cursor: pointer;
    display: block;
    line-height: 48px;
    margin-right: 16px;
    &:hover {
      text-decoration: underline;
    }
    &.active {
      span {
        font-weight: bold;
      }
    }
  }
`;

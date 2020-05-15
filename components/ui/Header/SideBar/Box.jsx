import styled from '@emotion/styled';

export default styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryDarker};
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 0;
  overflow: auto;
  opacity: 1;
  padding: 16px 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.3s;
  will-change: opacity;
  z-index: ${({ theme }) => theme.zIndex.drawer};
  &.sidebar-enter,
  &.sidebar-exit-active,
  &.sidebar-exit-done {
    opacity: 0;
  }
  &.sidebar-enter-active,
  &.sidebar-enter-done {
    opacity: 1;
  }
  .menuLink {
    color: ${({ theme }) => theme.colors.white};
    display: block;
    font-size: 16px;
    font-weight: 600;
    line-height: 48px;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    span {
      color: ${({ theme }) => theme.colors.white};
    }
    &.active {
      color: ${({ theme }) => theme.colors.primary};
      span {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
  > button + button {
    margin-top: 8px;
  }
`;

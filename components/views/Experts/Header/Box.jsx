import styled from '@emotion/styled';

export default styled.div`
  flex: 1;
  overflow: hidden;
  @media ${({ theme }) => theme.mediaQueries.atLeastTablet} {
    align-items: center;
    display: flex;
    justify-content: center;
  }
  h1 {
    color: ${({ theme }) => theme.colors.primaryDarker};
    font-family: Cabin;
    font-weight: bold;
    font-size: 32px;
    position: relative;
    :after {
      background-color: ${({ theme }) => theme.colors.secondary};
      content: '';
      display: block;
      height: 16px;
      width: 260px;
      position: absolute;
      left: 40px;
      top: 40px;
    }
  }
`;

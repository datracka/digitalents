import styled from '@emotion/styled';

export default styled.div`
  background: #fff;
  box-sizing: border-box;
  padding: 56px 132px;
  position: relative;
  width: 904px;
  @media ${({ theme }) => theme.mediaQueries.atLeastTablet} {
    padding: 40px 80px;
    width: 560px;
  }
  @media ${({ theme }) => theme.mediaQueries.atLeastPhone} {
    padding: 16px;
    width: calc(100vw - 32px);
  }
  svg {
    z-index: 1 !important;
  }
`;

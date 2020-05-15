import styled from '@emotion/styled';

export default styled.main`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  margin-top: 10rem;
  padding: 40px 3.375rem;
  transition: padding 0.4s ease;
  width: 100%;
  will-change: padding;
  @media ${({ theme }) => theme.mediaQueries.atLeastTablet} {
    margin-top: 7rem;
    padding: 0;
  }
  @media ${({ theme }) => theme.mediaQueries.phone} {
    margin-top: 88px;
  }
`;

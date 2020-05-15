import styled from '@emotion/styled';

export default styled.div`
  background-color: ${({ even, theme }) => (even ? theme.colors.secondary : theme.colors.primary)};
  margin-top: 24px;
  padding: 24px 48px;
  @media ${({ theme }) => theme.mediaQueries.atLeastTablet} {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 24px 24px;
  }
  .tags {
    margin: -4px;
  }
  .tag {
    background-color: ${({ even, theme }) =>
      even ? theme.colors.primary : theme.colors.secondary};
    display: inline-block;
    margin: 4px;
    padding: 4px 8px;
  }
  .content {
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    @media ${({ theme }) => theme.mediaQueries.atLeastTablet} {
      display: block;
    }
  }
  .more {
    background-color: ${({ even, theme }) =>
      even ? theme.colors.primary : theme.colors.secondary};
    border: none;
    border-radius: 3px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    padding: 16px 32px;
    white-space: nowrap;
    @media ${({ theme }) => theme.mediaQueries.atLeastTablet} {
      display: block;
      margin: auto;
      margin-top: 16px;
      max-width: 4em;
      text-align: center;
    }
    @media ${({ theme }) => theme.mediaQueries.atMostTablet} {
      margin-left: 16px;
    }
  }
`;

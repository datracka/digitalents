import React from 'react';
import styled from '@emotion/styled';
import range from 'lodash/range';

const Box = styled.div`
  background-color: ${({ even, theme }) => (even ? theme.colors.secondary : theme.colors.primary)};
  /* color: ${({ theme }) => theme.colors.white}; */
  margin-top: 24px;
  padding: 24px 48px;
  @media ${({ theme }) => theme.mediaQueries.atLeastTablet} {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 24px 24px;
  };
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
    };
  }
  .more {
    background-color: ${({ even, theme }) =>
      even ? theme.colors.primary : theme.colors.secondary};
    border: none;
    font-size: 16px;
    padding: 16px 32px;
    @media ${({ theme }) => theme.mediaQueries.atLeastTablet} {
      display: block;
      margin: auto;
      margin-top: 16px;
    };
  }
`;

const List = () =>
  range(0, 10).map(key => (
    <Box key={key} even={key % 2 === 0}>
      <h2>~Title</h2>
      <div className="tags">
        <span className="tag">~Tag 1</span>
        <span className="tag">~Tag 2</span>
      </div>
      <div className="content">
        <div>
          ~Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et lectus lacus. Sed
          lacus justo, dignissim imperdiet fringilla vitae, porttitor at purus.
        </div>
        <button className="more" type="button">
          ~More
        </button>
      </div>
    </Box>
  ));

export default List;

import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import range from 'lodash/range';
import Dots from './Dots';

const Box = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  > a {
    background-color: ${({ theme }) => theme.colors.secondary};
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.primaryDarker};
    display: block;
    line-height: 32px;
    padding: 0 8px;
    margin: 4px;
    min-width: 32px;
    text-align: center;
    &.active {
      background-color: ${({ theme }) => theme.colors.primaryDarker};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const getRange = (currentPage, totalPages) => {
  const wing = 2;
  const minLeft = 2;
  const takeFrom = Math.max(currentPage - wing, minLeft);
  const takeTo = Math.min(currentPage + wing + 1, totalPages);
  return {
    list: range(takeFrom, takeTo),
    skipLeft: takeFrom > 2,
    skipRight: takeTo < totalPages,
  };
};

const Pagination = ({ base, currentPage, totalPages }) => {
  if (totalPages < 2) return null;
  const { list, skipLeft, skipRight } = getRange(currentPage, totalPages);
  return (
    <Box>
      <Link href={base}>
        <a className={currentPage === 1 ? 'active' : ''}>1</a>
      </Link>
      {skipLeft && <Dots />}
      {list.map(page => (
        <Link as={`${base}/${page}`} href={`${base}?page=${page}`} key={page}>
          <a className={currentPage === page ? 'active' : ''} key={page}>
            {page}
          </a>
        </Link>
      ))}
      {skipRight && <Dots />}
      <Link as={`${base}/${totalPages}`} href={`${base}?page=${totalPages}`}>
        <a className={currentPage === totalPages ? 'active' : ''}>{totalPages}</a>
      </Link>
    </Box>
  );
};

export default Pagination;

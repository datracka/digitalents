import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import JobsBoardList from './JobsBoardList';

const containerCss = () => css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ContainerBox = styled.section`
  ${containerCss}
  margin-top: 5rem;
`;

export default ({ isFormOpen }) => {
  return (
    <ContainerBox>
      <JobsBoardList isFormOpen={isFormOpen} />
    </ContainerBox>
  );
};

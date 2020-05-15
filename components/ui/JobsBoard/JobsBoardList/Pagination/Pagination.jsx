import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useTranslations } from 'ui/Translations';
import { Button } from 'ui/variants';

const containerCss = () => css`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: center;
`;

const ContainerPagination = styled.div`
  ${containerCss}
`;

const PageBtn = styled(Button)`
  ${() => ({
    margin: '8px',
    backgroundColor: '#e5ecec',
  })}
`;

export default ({ onLoadMore, loadQtd, isLoading }) => {
  const { loading, loadMore } = useTranslations();
  return (
    <ContainerPagination>
      <PageBtn onClick={() => onLoadMore(loadQtd + 10)}>{isLoading ? loading : loadMore}</PageBtn>
    </ContainerPagination>
  );
};

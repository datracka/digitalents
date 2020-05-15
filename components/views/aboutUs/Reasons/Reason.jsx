/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import Font from 'ui/Font';

const containerCss = ({ theme }) => css`
  box-sizing: border-box;
  width: 904px;
  @media ${theme.mediaQueries.atLeastTablet} {
    width: 560px;
  }
  @media ${theme.mediaQueries.atLeastPhone} {
    width: calc(100vw - 32px);
  }
`;

const ContainerBox = styled.div`
  ${containerCss}
`;

const Reason = ({ text, title }) => {
  return (
    <ContainerBox>
      <Font color="primary" element="h4" variant="baselineCaption">
        {title}
      </Font>
      <Font color="primaryDarker" element="h3" variant="h3">
        {text}
      </Font>
    </ContainerBox>
  );
};

export default Reason;

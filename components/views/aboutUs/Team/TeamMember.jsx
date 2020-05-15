/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import Font from 'ui/Font';
import Img from 'ui/Img';

const TeamMember = ({ img, title, text }) => {
  const containerCss = ({ theme }) => css`
    background: #fff;
    box-sizing: border-box;
    padding: 20px 40px;
    @media ${theme.mediaQueries.atLeastTablet} {
      padding: 10px 20px;
      width: 200px;
    }
    @media ${theme.mediaQueries.atLeastPhone} {
      width: 100px;
      padding: 20px 20px;
      width: calc(100vw - 5px);
    }
  `;

  const ContainerBox = styled.div`
    ${containerCss}
  `;

  const imageCss = ({ theme }) => css`
    box-sizing: border-box;
    text-align: left;
    @media ${theme.mediaQueries.atLeastPhone} {
      text-align: center;
    }
  `;

  const ImageBox = styled.div`
    ${imageCss}
  `;

  return (
    <ContainerBox>
      <ImageBox>
        <Img width={{ xs: '150px' }} src={`/static/images/${img}.svg`} alt={img} />
      </ImageBox>
      <Font color="primary" element="h4" variant="baselineCaption">
        {title}
      </Font>
      <Font color="primaryDarker" element="h3" variant="h3">
        {text}
      </Font>
    </ContainerBox>
  );
};

export default TeamMember;

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import Font from 'ui/Font';
import Section from 'ui/common/Section';

const MainTitleSection = styled(Section)`
  ${({ theme }) => ({
    backgroundColor: 'white',
    color: '#29235c',
    marginTop: '10rem',
    [theme.mq.sm]: {
      marginTop: '15rem',
    },
  })}
`;

export default ({ mainTitle }) => {
  return (
    <MainTitleSection bg="primary">
      <Font
        variant="headlinePrimary"
        color="primaryDarker"
        element="h2"
        css={css`
          margin-bottom: 2rem;
        `}
      >
        {mainTitle}
      </Font>
    </MainTitleSection>
  );
};

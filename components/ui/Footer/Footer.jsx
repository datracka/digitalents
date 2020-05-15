import styled from '@emotion/styled';
import media from 'ui/media';

export default styled.footer`
  ${({
    theme: {
      colors: { primaryDarker, white },
    },
  }) => ({
    backgroundColor: primaryDarker,
    boxSizing: 'border-box',
    color: white,
    width: '100vw',
    padding: '40px 60px',
    position: 'relative',
  })}
  ${media({
    phone: {
      padding: '60px 24px',
    },
    tablet: {
      padding: '80px 60px',
    },
  })}
`;

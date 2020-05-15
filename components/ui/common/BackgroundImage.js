import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const spacer = ({ py }) => {
  return ({ theme }) => css`
    @media ${theme.mediaQueries.atMostPhone} {
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: ${theme.space[py.xs] || 0};
      padding-top: ${theme.space[py.xs] || 0};
    }
    @media ${theme.mediaQueries.atMostTablet} {
      padding-left: 2rem;
      padding-right: 2rem;
      padding-bottom: ${theme.space[py.sm] || 0};
      padding-top: ${theme.space[py.sm] || 0};
    }
    @media ${theme.mediaQueries.atMostDesktop} {
      padding-left: 8rem;
      padding-right: 8rem;
      padding-bottom: ${theme.space[py.lg] || 0};
      padding-top: ${theme.space[py.lg] || 0};
    }
  `;
};

const BackgroundImage = styled.div`
  ${spacer}
  ${({ mobileImage, desktopImage, theme }) => {
    let image;
    if (theme.mq === 'xs') {
      image = `url('/static/images/${mobileImage}')`;
    } else {
      image = `url('/static/images/${desktopImage}')`;
    }
    return {
      backgroundImage: image,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    };
  }}
`;

BackgroundImage.propTypes = {
  mobileImage: PropTypes.string.isRequired,
  desktopImage: PropTypes.string.isRequired,
};

export default BackgroundImage;

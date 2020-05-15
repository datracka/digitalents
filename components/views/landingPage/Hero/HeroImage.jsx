import styled from '@emotion/styled';
import { space } from 'styled-system';

/* @deprecated use ui/common/BackgroundImage as used in podcasts.jsx */
export default styled.div`
  ${space}
  ${({ theme }) => {
    let image;
    if (theme.mq === 'xs') {
      image = `url('/static/images/tangled_mobile_gerlent.svg')`;
    } else {
      image = `url('/static/images/tangled_desktop_gerlent.svg')`;
    }
    return {
      backgroundImage: image,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100%',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    };
  }}
`;

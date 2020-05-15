import styled from '@emotion/styled';
import { COLORS_KEY } from 'ui/theme/colors';

const Section = styled.section`
  ${({ theme, bg }) => {
    return {
      backgroundColor: theme[COLORS_KEY][bg],
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: theme.space[2],
      paddingRight: theme.space[2],
      [theme.mq.md]: {
        paddingLeft: theme.space[4],
        paddingRight: theme.space[4],
      },
    };
  }}
`;

export default Section;

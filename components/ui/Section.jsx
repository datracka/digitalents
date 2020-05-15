import styled from '@emotion/styled';
import { color, space, justifyContent, zIndex } from 'styled-system';

export default styled.section`
  ${({ theme }) => {
    return {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: theme.space[2],
      paddingRight: theme.space[2],
      [theme.mq.md]: {
        justifyContent: 'flex-start',
        paddingLeft: theme.space[4],
        paddingRight: theme.space[4],
      },
    };
  }}
  ${color} 
  ${space}
  ${justifyContent}
  ${zIndex}
`;

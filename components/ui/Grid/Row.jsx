// style functions
import styled from '@emotion/styled';
import {
  justifySelf,
  alignSelf,
  order,
  width,
  space,
  display,
  justifyContent,
  flexWrap,
} from 'styled-system';

const Row = styled.div`
  ${justifyContent}
  ${display}
  ${justifySelf}
  ${alignSelf}
  ${flexWrap}
  ${order}
  ${width}
  ${space}
`;

export default Row;

import styled from '@emotion/styled';
import {
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexBasis,
  flexDirection,
  width,
  display,
  space,
  textAlign,
} from 'styled-system';

const Flex = styled.div`
  ${width}
  ${alignItems}
  ${alignContent}
  ${justifyContent}
  ${flexWrap}
  ${flexBasis}
  ${flexDirection}
  ${space}
  ${display}
  ${textAlign}
`;

Flex.defaultProps = {
  display: 'flex',
};

export default Flex;

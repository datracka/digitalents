import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Grid = styled.div(
  props => css`
    width: 100%;
    height: '1000px';
    display: ${props.display};
    grid-template: ${props.gridTemplate};
    grid-gap: ${props.gridGap};
    justify-items: ${props.justifyItems};
    align-items: ${props.alignItems};
    justify-content: ${props.justifyContent};
    align-content: ${props.alignContent};
    grid-auto-flow: ${props.gridAutoFlow};
    grid-template-rows: ${props.gridTemplateRows};
    grid-template-columns: ${props.gridTemplateColumns};
  `,
);

export default Grid;

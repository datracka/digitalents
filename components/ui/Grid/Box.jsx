import styled from '@emotion/styled';
import {
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateAreas,
  gridArea,
  height,
  width,
  color,
} from 'styled-system';

const Box = styled.div`
  ${gridGap}
  ${gridColumnGap}
  ${gridRowGap}
  ${gridColumn}
  ${gridRow}
  ${gridAutoFlow}
  ${gridAutoColumns}
  ${gridAutoRows}
  ${gridTemplateAreas}
  ${gridArea}
  ${height}
  ${width}
  ${color}
  `;

Box.defaultProps = {
  width: '100%',
  height: '100px',
  backgroundColor: 'white',
};

export default Box;

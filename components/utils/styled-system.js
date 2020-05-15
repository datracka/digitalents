import {
  space,
  color,
  fontSize,
  width,
  height,
  display,
  fontFamily,
  lineHeight,
  textAlign,
  fontWeight,
  letterSpacing,
  compose,
  maxWidth,
  minWidth,
  maxHeight,
  minHeight,
  size,
  position as pos,
  zIndex,
  top,
  right,
  bottom,
  left,
  boxShadow,
  background,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  overflow,
  variant,
} from 'styled-system';

// define composed styles (separation of concerns based in https://styled-system.com/api/)

export const typography = compose(fontFamily, textAlign, lineHeight, fontWeight, letterSpacing);

export const misc = compose(
  boxShadow,
  background,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  overflow,
);

export const core = compose(width, height, fontSize, color, space);

export const layout = compose(display, maxWidth, minWidth, height, maxHeight, minHeight, size);

export const position = compose(pos, zIndex, top, right, bottom, left);

export { variant, compose };

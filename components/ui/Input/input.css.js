import styled from '@emotion/styled';

export default styled.label`
  display: block;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  overflow: hidden;
  position: relative;

  span {
    color: ${({ color, theme: { colors } }) => colors[color] || 'inherit'};
    display: block;
    white-space: nowrap;
    position: absolute;
    z-index: 1;
    padding-left: 16px;
    font-size: 1rem;
    top: 1.18rem;
    &.active {
      top: 0.1rem;
      font-size: 0.75rem;
    }
    transition: font 0.24s ease, top 0.24s ease;
  }

  .input {
    border-radius: 3px;
    box-sizing: border-box;
    color: ${({ color, theme: { colors } }) => colors[color] || 'inherit'};
    font-family: inherit;
    font-size: 1rem;
    display: block;
    height: 40px;
    padding: 0 16px;
    width: 100%;
    margin: 0;
    outline: none;

    ${({ fancy, theme }) =>
      fancy
        ? `
            background-color: ${theme.colors.secondary};
            border: none;
            border-bottom: 4px solid currentColor;
            border-top: 4px solid ${theme.colors.secondary};
            border-radius: 0px;
            height: 56px;
            ::placeholder {
              color: currentColor;
            }
          `
        : ''}
  }
`;

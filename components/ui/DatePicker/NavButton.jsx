/** @jsx jsx */
import { jsx } from '@emotion/core';
import Button from 'ui/Button';

export default ({ children, onClick }) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      css={{
        border: '1px solid #929598',
        background: 'transparent',
        padding: '8px',
        fontSize: '12px',
      }}
    >
      {children}
    </Button>
  );
};

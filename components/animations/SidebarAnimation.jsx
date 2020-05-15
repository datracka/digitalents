import React from 'react';
import { CSSTransition } from 'react-transition-group';

const SidebarAnimation = ({ children, ...props }) => (
  <CSSTransition {...props}>{children}</CSSTransition>
);

SidebarAnimation.defaultProps = {
  classNames: 'sidebar',
  unmountOnExit: true,
  timeout: 300,
};

export default SidebarAnimation;

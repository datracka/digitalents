import React from 'react';
import Link from 'next/link';
import Font from 'ui/Font';
import { useRouter } from 'next/router';

export default ({ authenticatedUser, protect, href, onClick, children, target, ...rest }) => {
  const router = useRouter();
  const className = router && router.pathname === href ? 'menuLink active' : 'menuLink';
  function handleClick() {
    sessionStorage.setItem('authRedirectPath', href);
    onClick();
  }

  if (protect && !authenticatedUser)
    return (
      <Font {...rest} className={className} element="a" onClick={handleClick} target={target}>
        {children}
      </Font>
    );

  if (target === '_blank')
    return (
      <Font {...rest} className={className} element="a" href={href} target={target}>
        {children}
      </Font>
    );

  return (
    <Link href={href}>
      <a {...rest} className={className} target={target}>
        <Font element="span">{children}</Font>
      </a>
    </Link>
  );
};

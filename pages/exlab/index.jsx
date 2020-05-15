import React from 'react';
import Link from 'next/link';

const divider = <span> | </span>;

export default () => (
  <div>
    <h1>Exlab</h1>
    <Link href="/exlab/sign-in">
      <a>Sign In</a>
    </Link>
    {divider}
    <Link href="/exlab/sign-up">
      <a>Sign Up</a>
    </Link>
    {divider}
    <Link href="/exlab/local-state">
      <a>Local State</a>
    </Link>
    {divider}
    <Link href="/exlab/fetch-example">
      <a>Fetch Example</a>
    </Link>
  </div>
);

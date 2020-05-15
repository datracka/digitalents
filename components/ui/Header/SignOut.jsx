/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useMutation } from '@apollo/react-hooks';

import { Button } from 'ui/variants';
import AUTHENTICATED_USER from 'apollo/query/authenticatedUser.graphql';
import SIGN_OUT from 'apollo/mutation/signoutUser.graphql';

const handleUpdate = (client, { data: { signoutUser } }) => {
  if (signoutUser !== null) {
    const { token, tmpAuthToken, redirectUrl } = signoutUser;
    client.writeQuery({
      query: AUTHENTICATED_USER,
      data: { authenticatedUser: null },
    });
    localStorage.removeItem('token', token);
    localStorage.removeItem('tmpAuthToken', tmpAuthToken);

    if (redirectUrl) window.location.assign(redirectUrl);
  }
};

const SignOut = ({ authenticatedUser: { email }, children, ...rest }) => {
  const [signoutUser] = useMutation(SIGN_OUT, { update: handleUpdate });
  return (
    <Button {...rest} onClick={() => signoutUser({ variables: { email } })}>
      {children}
    </Button>
  );
};

export default SignOut;

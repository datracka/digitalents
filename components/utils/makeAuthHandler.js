import Router from 'next/router';

import AUTHENTICATED_USER from 'apollo/query/authenticatedUser.graphql';

export default callBack => (client, { data: { signinUser, createUser } }) => {
  if (signinUser !== null) {
    const { token, redirectUrl, user } = signinUser || createUser;
    client.writeQuery({
      query: AUTHENTICATED_USER,
      data: { authenticatedUser: user },
    });
    const authRedirectPath = sessionStorage.getItem('authRedirectPath');
    const redirectTo = redirectUrl || authRedirectPath;

    localStorage.setItem('token', token);
    if (redirectTo) Router.push(redirectTo);
    sessionStorage.removeItem('authRedirectPath');
    if (callBack) callBack();
  }
};

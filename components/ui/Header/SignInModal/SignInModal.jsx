/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';

import { useTranslations } from 'ui/Translations';

import AuthCard from '../../AuthCard';
import SignIn from './SignIn';
import Remind from './Remind';

const SignInModal = props => {
  const [isRemind, setIsRemind] = useState(false);
  const { forgotPassword, signIn, signInHeader } = useTranslations();
  const View = isRemind ? Remind : SignIn;
  return (
    <AuthCard title={signIn} header={isRemind ? forgotPassword : signInHeader}>
      <View {...props} setIsRemind={setIsRemind} />
    </AuthCard>
  );
};

export default SignInModal;

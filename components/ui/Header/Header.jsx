import { useState } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import Modal, { useControlledModal } from 'ui/Modal';

import HeaderBar from './HeaderBar';
import Burger from './Burger';
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';

const Header = ({ landingPage, sticky }) => {
  const [isSidebarOpened, setSidebarOpened] = useState(false);
  const handleClick = () => setSidebarOpened(!isSidebarOpened);
  const [signInModalProps, signInToggle] = useControlledModal({
    onModalLeave: () => sessionStorage.removeItem('authRedirectPath'),
  });
  const [signUpModalProps, signUpToggle] = useControlledModal();
  return (
    <>
      {/* <SidebarAnimation in={isSidebarOpened}>
          <SideBar
            authenticatedUser={authenticatedUser}
            signInToggle={signInToggle}
            signUpToggle={signUpToggle}
          />
        </SidebarAnimation> */}
      <HeaderBar landingPage={landingPage} sticky={sticky} />
      <Burger
        onClick={handleClick}
        isOpen={isSidebarOpened}
        landingPage={landingPage}
        sticky={sticky}
      />
      <Modal {...signInModalProps}>
        <SignInModal toggle={signInToggle} />
      </Modal>
      <Modal {...signUpModalProps}>
        <SignUpModal toggle={signUpToggle} />
      </Modal>
    </>
  );
};

export default Header;

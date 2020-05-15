import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Header from 'ui/Header';
// import Gdpr from 'views/landingPage/Gdpr';
import { getCookie, setCookie } from 'utils/cookies';
// import ApplyNow from './ApplyNow';

const Shell = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const DefaultLayout = ({ children, landingPage }) => {
  React.useEffect(() => {
    if (!getCookie('euconsent')) {
      setCookie('euconsent', true, 9999);
    }
  }, []);
  return (
    <Shell>
      <Header landingPage={landingPage} sticky />
      {children}
      {/* <Translations scope="layouts.apply_now">
        <ApplyNow />
      </Translations> */}
      {/* <Footer {...rest} /> */}
      {/* <NetworkError /> */}

      {/*   <Modal {...modalProps} scroll={false}>
        <Gdpr toggle={toggle} />
      </Modal> */}
    </Shell>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;

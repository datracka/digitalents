/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useTranslations } from 'ui/Translations';

import Button from 'ui/Button';
import Font from 'ui/Font';
import Stamp from 'ui/Stamp';

const containerCss = ({ theme }) => css`
  background: #fff;
  box-sizing: border-box;
  padding: 56px 132px;
  width: 904px;
  @media ${theme.mediaQueries.atLeastTablet} {
    padding: 40px 80px;
    width: 560px;
  }
  @media ${theme.mediaQueries.atLeastPhone} {
    padding: 16px;
    width: calc(100vw - 48px);
  }
`;

const ContainerBox = styled.div`
  ${containerCss}
`;

const SubmitBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;

const OnsiteAvailabilityFinalModal = ({ toggle }) => {
  const { finalModalThankYou, finalModalOk } = useTranslations();

  return (
    <ContainerBox>
      <Stamp color="secondary" />
      <Font color="primaryDarker" element="h2" variant="h2">
        {finalModalThankYou}
      </Font>
      <SubmitBox>
        <Button
          bgColor="primary"
          color="primaryDarker"
          variant="hero"
          type="submit"
          onClick={toggle}
        >
          {finalModalOk}
        </Button>
      </SubmitBox>
    </ContainerBox>
  );
};

OnsiteAvailabilityFinalModal.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default OnsiteAvailabilityFinalModal;

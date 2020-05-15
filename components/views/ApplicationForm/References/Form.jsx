import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import RktaForm from 'rkta-form';

import ValidationError from 'ui/ValidationError';
import Option from './Option';

const Box = styled(RktaForm)`
  display: flex;
  flex-wrap: wrap;
  @media ${({ theme }) => theme.mediaQueries.atLeastTablet} {
    display: block;
  }
  > * {
    box-sizing: border-box;
    flex-basis: 50%;
    margin: 16px 0;
    padding-right: 24px;
    :nth-child(2n) {
      padding-left: 24px;
      padding-right: 0;
    }
    @media ${({ theme }) => theme.mediaQueries.atLeastTablet} {
      padding: 0 !important;
    }

    > :nth-of-type(2) {
      padding-left: 16px;
      padding-top: 8px;
    }
  }
`;

const RefecencesForm = ({ githubId, linkedinUrl, xingUrl, website, ...props }) => {
  return (
    <Box {...props}>
      <div>
        <Option iconName="GitHub" name="githubId" label="GitHub" defaultValue={githubId || ''} />
        <ValidationError name="githubId" />
      </div>
      <div>
        <Option
          iconName="LinkedIn"
          name="linkedinUrl"
          label="LinkedIn"
          defaultValue={linkedinUrl || ''}
        />
        <ValidationError name="linkedinUrl" />
      </div>
      <div>
        <Option iconName="Xing" name="xingUrl" label="Xing" defaultValue={xingUrl || ''} />
        <ValidationError name="xingUrl" />
      </div>
      <div>
        <Option iconName="website" name="website" label="website" defaultValue={website || ''} />
        <ValidationError name="website" />
      </div>
    </Box>
  );
};

RefecencesForm.propTypes = {
  githubId: PropTypes.string,
  linkedinUrl: PropTypes.string,
  xingUrl: PropTypes.string,
  website: PropTypes.string,
};

RefecencesForm.defaultProps = {
  githubId: null,
  linkedinUrl: null,
  xingUrl: null,
  website: null,
};

export default RefecencesForm;

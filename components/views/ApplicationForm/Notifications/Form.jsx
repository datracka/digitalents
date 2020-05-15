import React from 'react';
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
  }
`;

const Form = props => {
  return (
    <Box {...props}>
      <Option
        name="notifications"
        value="productUpdates"
        label="~Product updates"
        hint="~Product updates"
      />
      <Option name="notifications" value="reminders" label="~Reminders" hint="~Reminders" />
      <Option name="notifications" value="jobPosts" label="~Job posts" hint="~Job posts" />
      <Option
        name="notifications"
        value="communityNewsletter"
        label="~Community newsletter"
        hint="~Community newsletter"
      />
      <ValidationError name="notifications" />
    </Box>
  );
};

export default Form;

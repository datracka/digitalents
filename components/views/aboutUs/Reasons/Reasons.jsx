/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useTranslations } from 'ui/Translations';
import Section from 'ui/common/Section';
import colors from 'ui/theme/colors';
import Reason from './Reason';

const ReasonsSection = styled(Section)`
  ${({ theme }) => ({
    backgroundColor: colors.lightGrey,
    padding: '30px',
    width: '250px',
    marginLeft: 'auto',
    marginTop: '-20px',
    marginRight: '20px',
    [theme.mq.md]: {
      width: '500px',
      marginLeft: 'auto',
      marginRight: '50px',
      marginTop: '-100px',
      padding: '50px',
    },
  })};
`;

const Reasons = () => {
  const {
    remoteFirst,
    communityFocus,
    transparency,
    remoteFirstTitle,
    communityFocusTitle,
    transparencyTitle,
  } = useTranslations();

  return (
    <ReasonsSection>
      <Reason title={remoteFirstTitle} text={remoteFirst} />
      <Reason title={communityFocusTitle} text={communityFocus} />
      <Reason title={transparencyTitle} text={transparency} />
    </ReasonsSection>
  );
};

export default Reasons;

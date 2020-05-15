import { Flex, Row, CoolBox } from 'ui/Grid';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { useTranslations } from 'ui/Translations';
import { Title, Text } from 'ui/variants';

import Section from 'ui/Section';

const TextAbsolute = ({ children, top, left, ...props }) => (
  <Text
    {...props}
    css={css`
      position: absolute;
      top: ${top};
      left: ${left};
    `}
  >
    {children}
  </Text>
);

const Img = styled.img(({ top, left, theme: { mq } }) => {
  return {
    position: 'absolute',
    top: `${top}px`,
    left: `${left * 0.7}px`,
    [mq.lg]: {
      left: `${left}px`,
    },
  };
});
export default () => {
  const { title, wehave, role1, role2, role3, role4, role5, role6 } = useTranslations();
  return (
    <Section bg="white" py={{ xs: 4 }}>
      <Title variant="headlinePrimaryDarker" fontSize={{ xs: 2, md: 4 }} textAlign="left">
        {title}
      </Title>
      <Flex flexWrap="wrap" justifyContent="space-between" width="100%">
        <Row width={{ xs: '100%', md: '50%' }}>
          <CoolBox
            display="block"
            color="primaryDarker"
            position="relative"
            textAlign="center"
            minHeight="200px"
          >
            <TextAbsolute variant="bigPrimary" fontSize={4} top="20px" left="47px">
              {wehave}
            </TextAbsolute>
            <TextAbsolute fontSize={5} color="secondary" top="104px" left="90px">
              +
            </TextAbsolute>
            <TextAbsolute variant="bigPrimaryDarker" fontSize={5} top="70px" left="140px">
              200
            </TextAbsolute>
          </CoolBox>
          <CoolBox display="block" color="primaryDarker" position="relative" left="20px">
            <Text>{role1}</Text>
            <Text>{role2}</Text>
            <Text>{role3}</Text>
            <Text>{role4}</Text>
            <Text>{role5}</Text>
            <Text>{role6}</Text>
          </CoolBox>
        </Row>
        <Row width={{ xs: '100%', md: '50%' }}>
          <CoolBox
            p={1}
            my={2}
            display={{ xs: 'none', md: 'block' }}
            textAlign={{ xs: 'center', md: 'right' }}
            position="relative"
            minHeight="200px"
          >
            <Img src="/static/images/marta.svg" alt="Menu" width="128" top="40" left="60" />
            <Img src="/static/images/steve.svg" alt="Menu" width="192" top="80" left="250" />
            <Img src="/static/images/david.svg" alt="Menu" width="128" top="20" left="500" />
          </CoolBox>
        </Row>
      </Flex>
    </Section>
  );
};

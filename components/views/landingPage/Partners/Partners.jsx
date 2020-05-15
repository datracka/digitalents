import { Flex, Row, CoolBox } from 'ui/Grid';
import * as C from 'layouts/constants';
import getConfig from 'next/config';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTranslations } from 'ui/Translations';
import Section from 'ui/Section';
import { Button } from 'ui/variants';
import Partner from './Partner';

const { publicRuntimeConfig } = getConfig();

export default () => {
  const { buttonActionFreelance } = useTranslations();
  const partnerPlatformLogo =
    publicRuntimeConfig.site === C.SITE_GLOLENT ? 'gerlent.svg' : 'glolent.svg';
  const partnerPlatformLink =
    publicRuntimeConfig.site === C.SITE_GLOLENT ? 'https://gerlent.com' : 'https://glolent.com';

  return (
    <Section mt={{ xs: '-100px' }} bg="primaryDarker">
      <CoolBox width="100%" pt={{ xs: '100px' }}>
        <Flex flexWrap="wrap" justifyContent="space-between" width="100%">
          <CoolBox width={{ xs: '100%', md: '75%' }}>
            <Flex
              flexWrap="wrap"
              justifyContent="flex-start"
              width="100%"
              textAlign={{ xs: 'center', md: 'center' }}
            >
              <Row
                width={{ xs: '100%', sm: '32%' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Partner
                  link={partnerPlatformLink}
                  image={partnerPlatformLogo}
                  animationDelay="0.1s"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                />
              </Row>
              <Row
                width={{ xs: '100%', sm: '32%' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Partner
                  link="https://remotejobmarket.com"
                  image="remotejobmarket.svg"
                  animationDelay="0.1s"
                />
              </Row>
              <Row
                width={{ xs: '100%', sm: '32%' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Partner link="https://appics.com" image="appics.svg" animationDelay="0.1s" />
              </Row>
              <Row
                width={{ xs: '100%', sm: '32%' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Partner link="https://mindspace.com" image="mindspace.svg" animationDelay="0.1s" />
              </Row>
              <Row
                width={{ xs: '100%', sm: '32%' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Partner link="https://mvpfactory.co" image="MVP.svg" animationDelay="0.1s" />
              </Row>
              <Row
                width={{ xs: '100%', sm: '32%' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Partner link="http://www.shhared.de" image="shhared.svg" animationDelay="0.1s" />
              </Row>
              <Row
                width={{ xs: '100%', sm: '32%' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Partner link="https://www.guj.de" image="gruenejahr.svg" animationDelay="0.1s" />
              </Row>
              <Row
                width={{ xs: '100%', sm: '32%' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Partner
                  link="https://www.aboutyou.de"
                  image="aboutyou.svg"
                  animationDelay="0.1s"
                />
              </Row>
              <Row
                width={{ xs: '100%', sm: '32%' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Partner link="https://peregrine.ai" image="peregrine.svg" animationDelay="0.1s" />
              </Row>
            </Flex>
          </CoolBox>
          <CoolBox
            width={{ xs: '100%', md: '25%' }}
            my={{ xs: 4, md: null }}
            css={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <Flex
              flexWrap="wrap"
              justifyContent="flex-start"
              width="100%"
              textAlign={{ xs: 'center', md: 'center' }}
            >
              <Row width={{ xs: '100%' }}>
                <a href={`//${publicRuntimeConfig.classicDomain}/job_posts/new`}>
                  <Button variant="bigPrimary">{buttonActionFreelance}</Button>
                </a>
              </Row>
            </Flex>
          </CoolBox>
        </Flex>
      </CoolBox>
    </Section>
  );
};

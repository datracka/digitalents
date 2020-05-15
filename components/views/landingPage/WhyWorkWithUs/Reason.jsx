/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import getConfig from 'next/config';
import { Flex, Row, CoolBox } from 'ui/Grid';
import Img from 'ui/Img';
import { Text } from 'ui/variants';
import Observer from 'animations/Observer';

export const PRIMARY = 'primary';
export const SECONDARY = 'secondary';

const { publicRuntimeConfig } = getConfig();

// TODO
// Add delay
// Add transform
// Check mobile
const Reason = ({ type, text, img, delay, ...rest }) => {
  const defaultStyles = css`
    transform: translate(0, 40px);
    transition: transform, 0.5s ease ${delay};
  `;
  /*   const animation = css`
    transform: translate(0);
  `; */

  return (
    <Observer>
      {handleRef => {
        // const doAnimation = inView ? animation : null;
        return (
          <CoolBox
            py={4}
            my={2}
            height={{ xs: 'auto', md: '20rem' }}
            ref={handleRef}
            bg={type === PRIMARY ? publicRuntimeConfig.primaryColor : publicRuntimeConfig.secondary}
            css={[defaultStyles]}
            {...rest}
          >
            <Flex flexWrap="wrap" justifyContent="center" width="100%">
              <Row
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                ml={{ xs: null, md: 3 }}
                width="100%"
                display="flex"
              >
                <Img width={{ xs: '96px' }} src={`/static/images/${img}.svg`} alt={img} />
              </Row>
              <Row justifyContent="center" width="100%" display="flex">
                <Text
                  variant={type === PRIMARY ? 'textWhite' : 'textPrimaryDarker'}
                  px={3}
                  pt={3}
                  textAlign={{ xs: 'center', md: 'justify' }}
                >
                  {text}
                </Text>
              </Row>
            </Flex>
          </CoolBox>
        );
      }}
    </Observer>
  );
};

export default Reason;

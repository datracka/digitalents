import React, { useRef, useEffect } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Flex, Row, CoolBox } from 'ui/Grid';
import { Title, Text } from 'ui/variants';

export default ({ isOpen, label, onClick, answer, question }) => {
  const coolBox = useRef();
  const container = useRef();
  useEffect(() => {
    container.current.style.height = coolBox.current ? `${coolBox.current.offsetHeight}px` : null;
  });
  const handleOnClick = () => {
    onClick(label);
  };
  return (
    <React.Fragment>
      <Title
        alignSelf="flex-start"
        onClick={handleOnClick}
        variant="faq"
        css={css`
          cursor: pointer;
        `}
      >
        {question}
      </Title>
      <div
        ref={container}
        css={{
          height: '0px',
          transition: 'all 0.2s ease-in',
          overflow: 'hidden',
        }}
      >
        {isOpen && (
          <CoolBox color="primaryDarker" bg="secondary" p={2} ref={coolBox}>
            <Flex flexWrap="wrap" justifyContent="space-between" width="100%">
              <Row width={{ xs: '100%' }}>
                <Text>{answer}</Text>
              </Row>
            </Flex>
          </CoolBox>
        )}
      </div>
    </React.Fragment>
  );
};

/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Text, Button, Link } from 'ui/variants';
import { privacityPath } from 'paths';

const Container = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  text-align: justify;
  align-items: center;
  flex-direction: column;
  padding: 40px 40px;
  margin: 50px;
  max-width: 600px;
`;

const Item = styled.div``;

export default ({ toggle }) => {
  const handleClick = () => {
    toggle();
  };

  return (
    <Container>
      <Item>
        <Text variant="textPrimary" textAlign="justify" mt={2}>
          text
        </Text>
      </Item>
      <Item>
        <Link href={privacityPath()} mt={2}>
          links
        </Link>
      </Item>
      <Item>
        <Button variant="primaryDarker" mt={2} onClick={handleClick}>
          buttons
        </Button>
      </Item>
    </Container>
  );
};

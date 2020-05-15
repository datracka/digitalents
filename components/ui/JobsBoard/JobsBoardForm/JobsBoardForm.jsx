/** @jsx jsx */

import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';
import Font from 'ui/Font';
import DatePicker from 'ui/DatePicker';
import Button from 'ui/Button';

// useless function
const useJobsQuery = () => {};

const containerCss = ({ theme, isOpen }) => css`
  display: flex;
  flex-direction: row;
  width: 30%;
  height: 1000px;
  margin: 1rem 1rem 0 9rem;
  background-color: #e5ecec;
  flex-grow: 1;
  @media ${theme.mediaQueries.atLeastTablet} {
  }
  @media ${theme.mediaQueries.atLeastPhone} {
    display: ${isOpen ? 'flex' : 'none'};
    position: fixed;
    height: 100%;
    z-index: 1301;
    margin: 0;
    width: 100%;
    top: 0;
    overflow: auto;
  }
`;

const ContainerForm = styled.div`
  ${containerCss}
`;

const boxCss = ({ theme }) => css`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  width: 100%;
  color: ${theme.colors.primaryDarker};
`;

const Box = styled(Font)`
  ${boxCss}
`;

const sectionCss = () => css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1rem;
  width: 100%;
`;

const Section = styled.div`
  ${sectionCss}
`;

const Label = styled.h3`
  ${({ theme }) => ({
    color: theme.colors.primaryDarker,
    textTransform: 'uppercase',
  })}
`;
const Input = styled.input`
  ${() => ({
    width: '100%',
    height: '100%',
    fontSize: '16px',
  })}
`;

const SubBox = styled.div`
  ${() => ({
    width: '100%',
    height: '30px',
  })}
`;

const Icon = styled.span``;

const formButtonCss = ({ theme }) => css`
  display: none;
  @media ${theme.mediaQueries.atLeastPhone} {
    display: block;
    color: white;
    font-size: 12px;
    margin: 10px;
    background-color: ${theme.colors.primaryDarker};
    border-radius: 0;
    font-weight: 800;
    align-self: flex-end;
    text-transform: uppercase;
    width: 100%;
  }
`;

const SubmitButton = styled(Button)`
  ${formButtonCss}
`;

export default ({ isOpen, triggerForm }) => {
  const { query, setQuery } = useJobsQuery();
  const handleChange = e => setQuery({ ...query, [e.target.name]: e.target.value });
  return (
    <ContainerForm isOpen={isOpen}>
      <Box>
        <Section>
          <Label>Keywork</Label>
          <SubBox>
            <Input name="keywords" onChange={handleChange} />
            <Icon />
          </SubBox>
        </Section>
        <Section>
          <Label>Availability</Label>
          <SubBox css={{ alignItems: 'flex-start' }}>
            <DatePicker />
            <div
              css={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: '10px',
              }}
            >
              <Input
                type="radio"
                name="time"
                value="FULLTIME"
                css={{ height: 'auto', width: 'auto' }}
              />
              <b css={{ flex: 1 }}>FULLTIME</b>
              <Input
                type="radio"
                name="time"
                value="PART-TIME"
                css={{ height: 'auto', width: 'auto' }}
              />
              <b css={{ flex: 1 }}>PART-TIME</b>
            </div>
          </SubBox>
        </Section>
        <Section css={{ marginTop: '25rem' }}>
          <Label>Location</Label>
          <SubBox>
            <Input />
            <Icon />
            <Input type="checkbox" name="remote" css={{ height: '50%', width: '5%' }} />
            <b css={{ flex: 1 }}>REMOTE</b>
          </SubBox>
        </Section>
        <Section>
          <Label>Rate</Label>
          <SubBox
            css={{
              display: 'flex',
              flexDirection: 'row',
              width: '50%',
              justifyContent: 'space-between',
            }}
          >
            <b>From</b>
            <Input
              name="minRate"
              onChange={handleChange}
              type="number"
              pattern="(\d{3})([\.])(\d{2})"
            />
            <b css={{ flex: 1 }}>To:</b>
            <Input
              name="maxRate"
              onChange={handleChange}
              type="number"
              pattern="(\d{3})([\.])(\d{2})"
            />
          </SubBox>
        </Section>
        <SubmitButton onClick={() => triggerForm(false)}>SUBMIT</SubmitButton>
      </Box>
    </ContainerForm>
  );
};
